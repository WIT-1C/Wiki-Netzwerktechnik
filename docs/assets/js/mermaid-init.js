document.addEventListener("DOMContentLoaded", function() {
  try {
    if (window.mermaid && typeof mermaid.initialize === 'function') {
      mermaid.initialize({ startOnLoad: true });
      // For some builds mermaid.init() ensures rendering
      if (typeof mermaid.init === 'function') { mermaid.init(undefined, document.querySelectorAll('.language-mermaid, code.language-mermaid')); }
    }
  } catch (e) {
    console.warn('Mermaid init failed:', e);
  }
});
