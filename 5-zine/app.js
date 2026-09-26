(function () {
  const L = window.LEAP;

  const list = (id, items) => {
    const root = document.getElementById(id);
    items.forEach(v => {
      const li = document.createElement("li");
      li.innerHTML = `<h3><mark>${v.name}</mark></h3><p>${v.text}</p>`;
      root.append(li);
    });
  };
  list("values-list", L.values);
  list("why-list", L.whyJoin);

  const wall = document.getElementById("wall");
  const flyer = document.getElementById("flyer");
  const inner = document.getElementById("flyer-inner");
  const tilts = [-1.5, 1, -0.7, 1.6, -1.1, 0.8, -1.8, 1.2, -0.5];
  let opener = null;

  L.committees.forEach((c, i) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "sheet"; b.dataset.id = c.id;
    b.setAttribute("role", "listitem");
    b.style.setProperty("--tilt", tilts[i] + "deg");
    b.innerHTML = `<span class="name">${c.name}</span><span class="short">${c.short}</span><span class="take"><mark>Take one</mark></span>`;
    b.addEventListener("click", () => show(c, b));
    wall.append(b);
  });

  function show(c, b) {
    opener = b;
    inner.innerHTML = `
      <button class="close" type="button" autofocus>Close</button>
      <h3>${c.name}</h3>
      <p class="focus">${c.focus}</p>
      <h4><mark>What the committee does</mark></h4>
      <ul>${c.does.map(d => `<li>${d}</li>`).join("")}</ul>
      <p class="fit"><strong>A good fit if:</strong> ${c.fit}</p>`;
    inner.querySelector(".close").addEventListener("click", () => flyer.close());
    flyer.showModal();
  }
  flyer.addEventListener("close", () => { if (opener) opener.focus(); });
  flyer.addEventListener("click", e => { if (e.target === flyer) flyer.close(); });
})();
