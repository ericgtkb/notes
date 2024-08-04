window.MathJax = {
  loader: {
    load: ['[tex]/ams', '[tex]/physics', '[tex]/configmacros', '[tex]/boldsymbol']
  },
  tex: {
    packages: {'[+]': ['ams', 'physics', 'configmacros', 'boldsymbol']},
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)'],
    ],
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]'],
    ],
    processEscapes: true,
    processRefs: true,
    physics: {
      italicdiff: true,  //  italic differential d
    },
    macros: {
      N: '\\mathbb{N}',  // natural numbers
      Z: '\\mathbb{Z}',  // integers
      R: '\\mathbb{R}',  // real numbers
      C: '\\mathbb{C}',  // complex numbers
      E: '\\mathbb{E}',  // Euclidean space
      V: '\\mathbb{V}',  // vector space
      e: '\\mathbf{e}',  // basis vector
      ep: '\\boldsymbol{\\varepsilon}',  // basis 1-form
      frt: '(\\mathbf{r},t)',  // function of r, t
      fko: '(\\mathbf{k},\\omega)',  // function of k, omega
      kr: '\\mathbf{k}\\cdot\\mathbf{r}',  // k dot r
      ot: '\\omega t',  // omega t
      mb: ['\\mathbf{#1}', 1],  // vector Latin
      mbg: ['\\boldsymbol{#1}', 1],  // vector Greek
      ddfrac: ['\\frac{\\displaystyle #1}{\\displaystyle #2}', 2],  // displaystyle in both numerator and denominator
      ham: '\\mathcal{H}',  // Hamiltonian
      lag: '\\mathcal{L}',  // Lagrangian
      prob: '\\mathcal{P}',  // Prbability
      ua: '\\uparrow',  // up arrow
      da: '\\downarrow',  // down arrow
      la: '\\leftarrow',  // left arrow
      ra: '\\rightarrow',  // right arrow
      fa: '\\otimes',  // front arrow
      ba: '\\odot',  // back arrow
      lra: '\\leftrightarrow',  // left right arrow
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
