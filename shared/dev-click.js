/* Dev-only helper: ?click=<css selector> clicks an element after load so the
   opened state can be screenshotted headlessly. Harmless in production; remove if unwanted. */
(function () {
  const sel = new URLSearchParams(location.search).get("click");
  if (!sel) return;
  window.addEventListener("load", () => {
    setTimeout(() => { const el = document.querySelector(sel); if (el) el.click(); }, 300);
  });
})();
