(function () {
  const L = window.LEAP;
  const hues = ["indigo", "saffron", "teal", "rose", "olive"];
  const hue = i => hues[i % hues.length];

  // tile sizes chosen so 9 tiles fill a 6-column mosaic with no holes
  // (row units): big=2x2, wide=2x1, tall=1x2, plain=1x1
  const sizes = ["big", "wide", "tall", "plain", "wide", "plain", "wide", "wide", "wide"];
  // when one tile is open (full row on top), the remaining eight fill two rows
  const sizesOpen = ["wide", "plain", "plain", "wide", "plain", "wide", "wide", "plain"];
  const layout = () => {
    const tiles = [...mosaic.children];
    const rest = tiles.filter(t => t !== open);
    tiles.forEach((t, i) => { t.dataset.size = open ? "" : sizes[i]; });
    if (open) rest.forEach((t, i) => { t.dataset.size = sizesOpen[i]; });
  };

  /* hero swatches: one per committee */
  const sw = document.getElementById("swatches");
  L.committees.forEach((c, i) => {
    const s = document.createElement("span");
    s.className = hue(i);
    sw.append(s);
  });

  const list = (id, items) => {
    const root = document.getElementById(id);
    items.forEach((v, i) => {
      const li = document.createElement("li");
      li.className = hue(i);
      li.innerHTML = `<h3>${v.name}</h3><p>${v.text}</p>`;
      root.append(li);
    });
  };
  list("values-list", L.values);
  list("why-list", L.whyJoin);

  /* mosaic */
  const mosaic = document.getElementById("mosaic");
  let open = null;

  L.committees.forEach((c, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = `tile ${hue(i)}`;
    b.dataset.id = c.id;
    b.dataset.size = sizes[i];
    b.setAttribute("role", "listitem");
    b.setAttribute("aria-expanded", "false");
    b.innerHTML = `
      <span class="close" role="button" tabindex="-1">Close</span>
      <span class="name">${c.name}</span>
      <span class="short">${c.short}</span>
      <span class="detail">
        <span>
          <span class="focus">${c.focus}</span>
          <span class="fit" style="display:block"><strong>A good fit if:</strong> ${c.fit}</span>
        </span>
        <span>
          <h4>What the committee does</h4>
          <ul>${c.does.map(d => `<li>${d}</li>`).join("")}</ul>
        </span>
      </span>`;
    b.addEventListener("click", e => {
      if (e.target.closest(".close")) { close(); return; }
      if (b.getAttribute("aria-expanded") === "true") return;
      if (open) open.setAttribute("aria-expanded", "false");
      open = b;
      b.setAttribute("aria-expanded", "true");
      layout();
      const r = b.getBoundingClientRect();
      if (r.top < 0 || r.top > window.innerHeight * 0.6) b.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    mosaic.append(b);
  });

  function close() {
    if (!open) return;
    open.setAttribute("aria-expanded", "false");
    open.focus();
    open = null;
    layout();
  }
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
})();
