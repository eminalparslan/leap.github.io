(function () {
  const L = window.LEAP;

  /* values */
  const values = document.getElementById("values-list");
  L.values.forEach(v => {
    const wrap = document.createElement("div");
    wrap.innerHTML = `<dt>${v.name}</dt><dd>${v.text}</dd>`;
    values.append(wrap);
  });

  /* why join */
  const why = document.getElementById("why-list");
  L.whyJoin.forEach(w => {
    const el = document.createElement("div");
    el.innerHTML = `<h3>${w.name}</h3><p>${w.text}</p>`;
    why.append(el);
  });

  /* doors */
  const doors = document.getElementById("doors");
  const doorway = document.getElementById("doorway");
  let open = null;

  L.committees.forEach(c => {
    const b = document.createElement("button");
    b.className = "door";
    b.type = "button";
    b.setAttribute("role", "listitem");
    b.setAttribute("aria-expanded", "false");
    b.setAttribute("aria-controls", "doorway");
    b.dataset.id = c.id;
    b.innerHTML = `
      <span class="inside">${c.short}</span>
      <span class="panel"><span>${c.name}</span></span>`;
    b.addEventListener("click", () => toggle(c, b));
    doors.append(b);
  });

  function toggle(c, b) {
    if (open === b) { close(); return; }
    if (open) open.setAttribute("aria-expanded", "false");
    open = b;
    b.setAttribute("aria-expanded", "true");
    doorway.innerHTML = `
      <button class="close" type="button">Close</button>
      <h3>${c.name}</h3>
      <div>
        <p class="focus">${c.focus}</p>
        <p class="fit"><strong>A good fit if:</strong> ${c.fit}</p>
      </div>
      <div>
        <h4>What the committee does</h4>
        <ul>${c.does.map(d => `<li>${d}</li>`).join("")}</ul>
      </div>`;
    doorway.hidden = false;
    doorway.querySelector(".close").addEventListener("click", close);
    // bring the doorway into view without yanking the page if it is already visible
    const r = doorway.getBoundingClientRect();
    if (r.top > window.innerHeight * 0.7) doorway.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function close() {
    if (open) { open.setAttribute("aria-expanded", "false"); open.focus(); }
    open = null;
    doorway.hidden = true;
  }

  document.addEventListener("keydown", e => { if (e.key === "Escape" && open) close(); });
})();
