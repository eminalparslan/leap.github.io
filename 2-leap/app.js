(function () {
  const L = window.LEAP;

  const list = (id, items) => {
    const root = document.getElementById(id);
    items.forEach(v => {
      const el = document.createElement("div");
      el.className = "value";
      el.innerHTML = `<h3>${v.name}</h3><p>${v.text}</p>`;
      root.append(el);
    });
  };
  list("values-list", L.values);
  list("why-list", L.whyJoin);

  const strip = document.getElementById("strip");
  const sheet = document.getElementById("sheet");
  const inner = document.getElementById("sheet-inner");
  let opener = null;

  L.committees.forEach(c => {
    const b = document.createElement("button");
    b.className = "card"; b.type = "button"; b.dataset.id = c.id;
    b.setAttribute("role", "listitem");
    b.innerHTML = `<span class="name">${c.name}</span><span><span class="short">${c.short}</span><br><span class="open">Open</span></span>`;
    b.addEventListener("click", () => show(c, b));
    strip.append(b);
  });

  function show(c, b) {
    opener = b;
    inner.innerHTML = `
      <button class="close" type="button" autofocus>Close</button>
      <h3>${c.name}</h3>
      <p class="focus">${c.focus}</p>
      <div><h4>What the committee does</h4><ul>${c.does.map(d => `<li>${d}</li>`).join("")}</ul></div>
      <p class="fit"><strong>A good fit if:</strong> ${c.fit}</p>`;
    inner.querySelector(".close").addEventListener("click", () => sheet.close());
    sheet.showModal();
  }
  sheet.addEventListener("close", () => { if (opener) opener.focus(); });
  sheet.addEventListener("click", e => { if (e.target === sheet) sheet.close(); });

  // arrow-key scrolling for the strip
  strip.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") strip.scrollBy({ left: 300, behavior: "smooth" });
    if (e.key === "ArrowLeft") strip.scrollBy({ left: -300, behavior: "smooth" });
  });
})();
