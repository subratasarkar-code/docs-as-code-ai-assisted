/**
 * BM25 Lexical Ranking Engine for Natural Language Search
 * Standalone, zero-dependency search engine for offline documentation sites.
 * Compatible with file:/// local filesystem protocols.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.BM25Engine = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  // Standard English Stop Words for Natural Language Query Filtering
  const STOPWORDS = new Set([
    'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any', 'are', 'aren',
    'arent', 'as', 'at', 'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but',
    'by', 'can', 'cant', 'cannot', 'could', 'couldnt', 'did', 'didn', 'didnt', 'do', 'does', 'doesn',
    'doesnt', 'doing', 'don', 'dont', 'down', 'during', 'each', 'few', 'for', 'from', 'further', 'had',
    'hadnt', 'has', 'hasnt', 'have', 'havent', 'having', 'he', 'hed', 'hell', 'hes', 'her', 'here',
    'heres', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'hows', 'i', 'id', 'ill', 'im', 'ive',
    'if', 'in', 'into', 'is', 'isnt', 'it', 'its', 'itself', 'lets', 'me', 'more', 'most', 'mustnt',
    'my', 'myself', 'no', 'nor', 'not', 'of', 'off', 'on', 'once', 'only', 'or', 'other', 'ought',
    'our', 'ours', 'ourselves', 'out', 'over', 'own', 'same', 'shant', 'she', 'shed', 'shell', 'shes',
    'should', 'shouldnt', 'so', 'some', 'such', 'than', 'that', 'thats', 'the', 'their', 'theirs',
    'them', 'themselves', 'then', 'there', 'theres', 'these', 'they', 'theyd', 'theyll', 'theyre',
    'theyve', 'this', 'those', 'through', 'to', 'too', 'under', 'until', 'up', 'very', 'was', 'wasnt',
    'we', 'wed', 'well', 'were', 'werent', 'what', 'whats', 'when', 'whens', 'where', 'wheres', 'which',
    'while', 'who', 'whos', 'whom', 'why', 'whys', 'with', 'wont', 'would', 'wouldnt', 'you', 'youd',
    'youll', 'youre', 'youve', 'your', 'yours', 'yourself', 'yourselves'
  ]);

  /**
   * Fast Porter-inspired morphological stemmer for English terms
   */
  function stem(word) {
    let w = word.toLowerCase();
    if (w.length <= 3) return w;
    if (w.endsWith('sses')) return w.slice(0, -2);
    if (w.endsWith('ies')) return w.slice(0, -3) + 'i';
    if (w.endsWith('ss')) return w;
    if (w.endsWith('s') && !w.endsWith('us') && !w.endsWith('is')) return w.slice(0, -1);
    if (w.endsWith('eed')) return w.slice(0, -1);
    if (w.endsWith('ed') && w.length > 4) return w.slice(0, -2);
    if (w.endsWith('ing') && w.length > 5) return w.slice(0, -3);
    if (w.endsWith('tional')) return w.slice(0, -2);
    if (w.endsWith('tion')) return w.slice(0, -4) + 't';
    if (w.endsWith('izer')) return w.slice(0, -1);
    if (w.endsWith('ization')) return w.slice(0, -5);
    if (w.endsWith('ment') && w.length > 6) return w.slice(0, -4);
    if (w.endsWith('able') && w.length > 6) return w.slice(0, -4);
    return w;
  }

  /**
   * Tokenize text into normalized, filtered, stemmed tokens
   */
  function tokenize(text) {
    if (!text) return [];
    // Extract alphanumeric terms
    const matches = text.toLowerCase().match(/[a-z0-9_]+/g);
    if (!matches) return [];
    const tokens = [];
    for (let i = 0; i < matches.length; i++) {
      const w = matches[i];
      if (w.length > 1 && !STOPWORDS.has(w)) {
        tokens.push(stem(w));
      }
    }
    return tokens;
  }

  class BM25Engine {
    constructor(passages, config = {}) {
      this.passages = passages || [];
      this.k1 = config.k1 !== undefined ? config.k1 : 1.4; // Saturation factor
      this.b = config.b !== undefined ? config.b : 0.75;   // Length normalization factor
      this.titleBoost = config.titleBoost !== undefined ? config.titleBoost : 1.6;

      this.docTokens = [];
      this.docLengths = [];
      this.docTfMaps = [];
      this.titleTokensList = [];
      this.df = {};
      this.idf = {};
      this.avgdl = 0;
      this.totalPassages = this.passages.length;

      this.indexCorpus();
    }

    indexCorpus() {
      let totalLength = 0;
      this.docTokens = new Array(this.totalPassages);
      this.docLengths = new Array(this.totalPassages);
      this.docTfMaps = new Array(this.totalPassages);
      this.titleTokensList = new Array(this.totalPassages);

      for (let i = 0; i < this.totalPassages; i++) {
        const p = this.passages[i];
        const bodyToks = tokenize(p.text || '');
        const titleToks = tokenize((p.section_title || '') + ' ' + (p.doc_title || ''));
        
        this.titleTokensList[i] = new Set(titleToks);
        
        // TF mapping
        const tfMap = {};
        for (let j = 0; j < bodyToks.length; j++) {
          const t = bodyToks[j];
          tfMap[t] = (tfMap[t] || 0) + 1;
        }

        const len = bodyToks.length;
        this.docTokens[i] = bodyToks;
        this.docLengths[i] = len;
        this.docTfMaps[i] = tfMap;
        totalLength += len;

        // DF counting
        const uniqueInDoc = new Set(bodyToks.concat(titleToks));
        uniqueInDoc.forEach(t => {
          this.df[t] = (this.df[t] || 0) + 1;
        });
      }

      this.avgdl = this.totalPassages > 0 ? (totalLength / this.totalPassages) : 1;

      // Robertson-Spärck Jones IDF with +1 smoothing
      const N = this.totalPassages;
      for (const term in this.df) {
        const n = this.df[term];
        this.idf[term] = Math.log((N - n + 0.5) / (n + 0.5) + 1.0);
      }
    }

    /**
     * Search passages with natural language query using BM25 ranking
     */
    search(query, options = {}) {
      if (!query || typeof query !== 'string') return [];
      const topK = options.topK || 10;
      const categoryFilter = options.categoryFilter || null;
      const docFilter = options.docFilter || null;

      const qTokens = tokenize(query);
      if (qTokens.length === 0) return [];

      const rawQueryWords = (query.toLowerCase().match(/[a-z0-9_]+/g) || [])
        .filter(w => !STOPWORDS.has(w) && w.length > 1);

      const scored = [];

      for (let i = 0; i < this.totalPassages; i++) {
        const p = this.passages[i];
        if (categoryFilter && p.category !== categoryFilter) continue;
        if (docFilter && p.doc_id !== docFilter && p.doc_name !== docFilter) continue;

        const tfMap = this.docTfMaps[i];
        const titleSet = this.titleTokensList[i];
        const dl = this.docLengths[i];

        let score = 0;
        const matchedStems = new Set();
        const matchedRawTerms = new Set();

        for (let j = 0; j < qTokens.length; j++) {
          const stemTerm = qTokens[j];
          const rawWord = rawQueryWords[j] || stemTerm;
          const termIdf = this.idf[stemTerm];
          if (!termIdf) continue;

          let tf = tfMap[stemTerm] || 0;
          const inTitle = titleSet.has(stemTerm);

          if (tf > 0 || inTitle) {
            matchedStems.add(stemTerm);
            matchedRawTerms.add(rawWord);

            // Title boost
            let effectiveTf = tf + (inTitle ? 2.5 : 0);
            let boost = inTitle ? this.titleBoost : 1.0;

            let numerator = effectiveTf * (this.k1 + 1.0);
            let denominator = effectiveTf + this.k1 * (1.0 - this.b + this.b * (dl / this.avgdl));
            score += (termIdf * (numerator / denominator)) * boost;
          }
        }

        if (score > 0) {
          // Exact phrase adjacency boost if 2 or more terms
          if (qTokens.length >= 2 && p.text) {
            const lowerText = p.text.toLowerCase();
            const joinedRaw = rawQueryWords.join(' ');
            if (joinedRaw.length > 3 && lowerText.includes(joinedRaw)) {
              score *= 1.35; // 35% boost for exact phrase match
            }
          }

          scored.push({
            passage: p,
            score: score,
            matchedStems: Array.from(matchedStems),
            matchedRawTerms: Array.from(matchedRawTerms)
          });
        }
      }

      scored.sort((a, b) => b.score - a.score);

      const results = scored.slice(0, topK);
      if (results.length === 0) return [];

      const maxScore = results[0].score;

      return results.map(item => {
        const relevancePct = Math.min(100, Math.round((item.score / maxScore) * 100));
        const highlightedSnippet = this.generateSnippet(item.passage.text, item.matchedRawTerms, item.matchedStems);

        return {
          passage: item.passage,
          score: parseFloat(item.score.toFixed(2)),
          relevance: relevancePct,
          matchedTerms: item.matchedRawTerms,
          snippet: highlightedSnippet
        };
      });
    }

    /**
     * Extracts dynamic snippet centered around matching query terms with highlight marks
     */
    generateSnippet(text, matchedRawTerms, matchedStems, maxWords = 35) {
      if (!text) return '';
      const words = text.split(/\s+/);
      if (words.length <= maxWords) {
        return this.highlightWords(text, matchedRawTerms, matchedStems);
      }

      // Find the window of maxWords with highest density of matched terms
      const stemsSet = new Set(matchedStems);
      let bestStart = 0;
      let maxMatchesInWindow = 0;

      for (let i = 0; i <= words.length - maxWords; i += 3) {
        let count = 0;
        for (let j = i; j < i + maxWords; j++) {
          const w = words[j].toLowerCase().replace(/[^a-z0-9_]/g, '');
          if (stemsSet.has(stem(w))) count++;
        }
        if (count > maxMatchesInWindow) {
          maxMatchesInWindow = count;
          bestStart = i;
        }
      }

      const snippetSlice = words.slice(bestStart, bestStart + maxWords).join(' ');
      const prefix = bestStart > 0 ? '... ' : '';
      const suffix = bestStart + maxWords < words.length ? ' ...' : '';

      return prefix + this.highlightWords(snippetSlice, matchedRawTerms, matchedStems) + suffix;
    }

    highlightWords(str, matchedRawTerms, matchedStems) {
      if (!str) return '';
      const stemsSet = new Set(matchedStems);
      // Split preserving words and punctuation
      return str.replace(/([a-zA-Z0-9_]+)/g, (match) => {
        const clean = match.toLowerCase();
        if (stemsSet.has(stem(clean))) {
          return `<mark class="bm25-highlight">${match}</mark>`;
        }
        return match;
      });
    }
  }

  return BM25Engine;
});
