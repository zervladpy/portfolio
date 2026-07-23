const dropdowns = document.querySelectorAll<HTMLElement>("[data-dropdown]");

function setState(dropdown: HTMLElement, open: boolean) {
    dropdown.setAttribute("data-state", open ? "open" : "closed");
    dropdown
        .querySelector("[data-dropdown-trigger]")
        ?.setAttribute("aria-expanded", String(open));
}

dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector("[data-dropdown-trigger]");

    trigger?.addEventListener("click", () => {
        const isOpen = dropdown.getAttribute("data-state") === "open";
        dropdowns.forEach((other) => {
            if (other !== dropdown) setState(other, false);
        });
        setState(dropdown, !isOpen);
    });

    dropdown.querySelectorAll("[data-dropdown-item]").forEach((item) => {
        item.addEventListener("click", () => setState(dropdown, false));
    });
});

document.addEventListener("click", (event) => {
    dropdowns.forEach((dropdown) => {
        if (
            dropdown.getAttribute("data-state") === "open" &&
            !dropdown.contains(event.target as Node)
        ) {
            setState(dropdown, false);
        }
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        dropdowns.forEach((dropdown) => setState(dropdown, false));
    }
});
