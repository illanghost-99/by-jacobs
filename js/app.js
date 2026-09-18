const menu = document.getElementById("mobileMenu");
document.getElementById("hamburger")?.addEventListener("click", () => {
  menu?.classList.toggle("open");
});

const chat = document.getElementById("chat");
document.getElementById("fabBtn")?.addEventListener("click", () => {
  chat?.classList.toggle("open");
});

document.getElementById("chatSend")?.addEventListener("click", sendChat);
document.getElementById("chatInput")?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendChat();
});

function sendChat() {
  const input = document.getElementById("chatInput");
  const box = document.getElementById("chatBody");
  if (!input?.value.trim()) return;
  const q = input.value.trim();
  box.insertAdjacentHTML("beforeend", `<div class="bubble" style="background:#141210;color:#fff;border-radius:12px 12px 4px 12px;margin-left:40px">${q}</div>`);
  input.value = "";
  const reply = recommend(q);
  setTimeout(() => {
    box.insertAdjacentHTML("beforeend", `<div class="bubble">${reply}</div>`);
    box.scrollTop = box.scrollHeight;
  }, 450);
}

function recommend(q) {
  const t = q.toLowerCase();
  if (t.includes("tunn") || t.includes("volym") || t.includes("håravfall"))
    return "För tunnare hår rekommenderar vi Nioxin System eller Kérastase Genesis. Boka gärna en konsultation med Bashar så tar vi fram en rutin.";
  if (t.includes("skadat") || t.includes("blekt") || t.includes("slit"))
    return "Olaplex No.3 + K18 Leave-In är vår mest älskade reparationsduo. Finns i shoppen och används i salongen.";
  if (t.includes("boka") || t.includes("tid") || t.includes("klipp"))
    return "Du kan boka direkt på sidan Boka. Färg och slingor bokas via 08-40 90 94 64 så vi kan planera tiden rätt.";
  if (t.includes("öppet") || t.includes("adress"))
    return "Drottninggatan 81, Stockholm. Mån–fre 11–19, lör 11–16. Söndag och röda dagar stängt.";
  return "Vi hjälper dig gärna. Beskriv hårtyp, mål (glans, volym, reparation) så tar vi fram 2–3 produkter. Du kan också maila info@byjacobs.se – vi svarar inom 24 timmar.";
}

document.getElementById("acceptCookies")?.addEventListener("click", () => {
  document.getElementById("cookie")?.classList.add("hide");
});

const range = document.getElementById("baRange");
if (range) {
  const after = document.getElementById("baAfter");
  const handle = document.getElementById("baHandle");
  const update = () => {
    after.style.clipPath = `inset(0 ${100 - range.value}% 0 0)`;
    handle.style.left = range.value + "%";
  };
  range.addEventListener("input", update);
  update();
}

document.querySelectorAll("[data-day]").forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelectorAll("[data-day]").forEach((d) => d.classList.remove("sel"));
    el.classList.add("sel");
    const s = document.getElementById("sumDate");
    if (s) s.textContent = el.dataset.day;
  });
});
document.querySelectorAll("[data-time]").forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelectorAll("[data-time]").forEach((d) => d.classList.remove("sel"));
    el.classList.add("sel");
    const s = document.getElementById("sumTime");
    if (s) s.textContent = el.dataset.time;
  });
});
document.querySelectorAll("[data-svc]").forEach((el) => {
  el.addEventListener("click", () => {
    const s = document.getElementById("sumSvc");
    const p = document.getElementById("sumPrice");
    if (s) s.textContent = el.dataset.svc;
    if (p) p.textContent = el.dataset.price + " kr";
  });
});
document.querySelectorAll("[data-stylist]").forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelectorAll("[data-stylist]").forEach((d) => d.style.outline = "none");
    el.style.outline = "2px solid #B8945A";
    const s = document.getElementById("sumStylist");
    if (s) s.textContent = el.dataset.stylist;
  });
});
