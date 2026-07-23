const toggle = document.getElementById("mobile-menu-toggle");
const closeButton = document.getElementById("mobile-drawer-close");
const drawer = document.getElementById("mobile-drawer");
const overlay = document.getElementById("mobile-drawer-overlay");

function setOpen(open: boolean) {
    if (!drawer || !overlay || !toggle) return;

    const state = open ? "open" : "closed";
    drawer.setAttribute("data-state", state);
    overlay.setAttribute("data-state", state);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
}

toggle?.addEventListener("click", () => {
    setOpen(drawer?.getAttribute("data-state") !== "open");
});

closeButton?.addEventListener("click", () => setOpen(false));
overlay?.addEventListener("click", () => setOpen(false));

drawer?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) setOpen(false);
});
