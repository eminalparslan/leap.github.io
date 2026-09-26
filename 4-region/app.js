(function () {
  const L = window.LEAP;

  const list = (id, items) => {
    const root = document.getElementById(id);
    items.forEach(v => {
      const el = document.createElement("div");
      el.innerHTML = `<h3>${v.name}</h3><p>${v.text}</p>`;
      root.append(el);
    });
  };
  list("values-list", L.values);
  list("why-list", L.whyJoin);

  /* map positions (viewBox 800 x 560) and label side */
  const pos = {
    interfaith:   { x: 400, y: 120, side: "n" },
    finance:      { x: 230, y: 200, side: "w" },
    arts:         { x: 590, y: 170, side: "n" },
    career:       { x: 260, y: 330, side: "w" },
    wellness:     { x: 560, y: 340, side: "e" },
    safeguarding: { x: 410, y: 470, side: "s" },
    outreach:     { x: 170, y: 450, side: "w" },
    marketing:    { x: 660, y: 450, side: "e" },
    operations:   { x: 420, y: 275, side: "s" }
  };
  // connections: every committee is linked to at least three others
  const edges = [
    ["interfaith", "finance"], ["interfaith", "arts"], ["interfaith", "operations"], ["interfaith", "career"],
    ["finance", "career"], ["finance", "outreach"], ["finance", "operations"],
    ["arts", "wellness"], ["arts", "marketing"], ["arts", "operations"],
    ["career", "outreach"], ["career", "safeguarding"], ["career", "operations"],
    ["wellness", "safeguarding"], ["wellness", "operations"], ["wellness", "marketing"],
    ["safeguarding", "outreach"], ["safeguarding", "marketing"], ["safeguarding", "operations"],
    ["outreach", "marketing"], ["marketing", "operations"]
  ];

  const svgNS = "http://www.w3.org/2000/svg";
  const el = (n, attrs = {}) => { const e = document.createElementNS(svgNS, n); for (const k in attrs) e.setAttribute(k, attrs[k]); return e; };

  const gEdges = document.getElementById("edges");
  const gNodes = document.getElementById("nodes");
  const legend = document.getElementById("legend");
  const detail = document.getElementById("detail");

  edges.forEach(([a, b]) => {
    const l = el("line", { x1: pos[a].x, y1: pos[a].y, x2: pos[b].x, y2: pos[b].y });
    l.dataset.a = a; l.dataset.b = b;
    gEdges.append(l);
  });

  const nodes = {};
  const buttons = {};
  L.committees.forEach(c => {
    const p = pos[c.id];
    const g = el("g", { class: "node", tabindex: "0", role: "button", "aria-label": c.name });
    g.dataset.id = c.id;
    g.append(el("circle", { class: "halo", cx: p.x, cy: p.y, r: 26 }));
    g.append(el("circle", { cx: p.x, cy: p.y, r: 9 }));
    const t = el("text", { x: p.x, y: p.y });
    const off = { n: [0, -20, "middle"], s: [0, 32, "middle"], e: [18, 5, "start"], w: [-18, 5, "end"] }[p.side];
    t.setAttribute("x", p.x + off[0]); t.setAttribute("y", p.y + off[1]); t.setAttribute("text-anchor", off[2]);
    t.textContent = c.name;
    g.append(t);
    g.addEventListener("click", () => select(c));
    g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(c); } });
    gNodes.append(g);
    nodes[c.id] = g;

    const li = document.createElement("li");
    const b = document.createElement("button");
    b.type = "button"; b.textContent = c.name; b.setAttribute("aria-pressed", "false"); b.dataset.id = c.id;
    b.addEventListener("click", () => select(c));
    li.append(b); legend.append(li);
    buttons[c.id] = b;
  });

  let current = null;
  function select(c) {
    if (current === c.id) { clear(); return; }
    current = c.id;
    Object.values(nodes).forEach(n => n.classList.toggle("active", n.dataset.id === c.id));
    Object.values(buttons).forEach(b => b.setAttribute("aria-pressed", String(b.dataset.id === c.id)));
    gEdges.querySelectorAll("line").forEach(l => l.classList.toggle("lit", l.dataset.a === c.id || l.dataset.b === c.id));
    detail.innerHTML = `
      <button class="close" type="button">Close</button>
      <h3>${c.name}</h3>
      <p class="focus">${c.focus}</p>
      <h4>What the committee does</h4>
      <ul>${c.does.map(d => `<li>${d}</li>`).join("")}</ul>
      <p class="fit"><strong>A good fit if:</strong> ${c.fit}</p>`;
    detail.hidden = false;
    detail.querySelector(".close").addEventListener("click", clear);
    const r = detail.getBoundingClientRect();
    if (r.top > window.innerHeight || r.bottom < 0) detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  function clear() {
    current = null;
    Object.values(nodes).forEach(n => n.classList.remove("active"));
    Object.values(buttons).forEach(b => b.setAttribute("aria-pressed", "false"));
    gEdges.querySelectorAll("line").forEach(l => l.classList.remove("lit"));
    detail.hidden = true;
  }
  document.addEventListener("keydown", e => { if (e.key === "Escape") clear(); });
})();
