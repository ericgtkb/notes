window.MathJax = {
  loader: {
    load: ['[tex]/ams', '[tex]/physics', '[tex]/configmacros', '[tex]/boldsymbol']
  },
  tex: {
    packages: {'[+]': ['ams', 'physics', 'configmacros', 'boldsymbol']},
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processRefs: true,
    macros: {
      frt: '(\\mathbf{r},t)',  // function of r, t
      fko: '(\\mathbf{k},\\omega)',  // function of k, omega
      kr: '\\mathbf{k}\\cdot\\mathbf{r}',  // k dot r
      ot: '\\omega t',  // omega t
      mb: ['\\mathbf{#1}', 1],  // vector Latin
      mbg: ['\\boldsymbol{#1}', 1],  // vector Greek
      ddfrac: ['\\frac{\\displaystyle #1}{\\displaystyle #2}', 2],  // displaystyle in both numerator and denominator
      pd: ['\\frac{\\partial #1}{\\partial #2}', 2],  // partial derivative
      pdtv: ['\\frac{\\partial^2 #1}{\\partial #2\\partial #3}', 3],  // 2nd order partial derivative with 2 variables
      pdn: ['\\frac{\\partial^{#3} #1}{\\partial #2^{#3}}', 3],  // nth order partial derivative
    },
    tags: 'ams',  // Enable \label, \ref, \eqref
  },
  options: {
    processHtmlClass: 'mathjax_process',
  },
};

(function () {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
  script.async = true;
  document.head.appendChild(script);
})();
