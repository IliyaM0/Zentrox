export function initMobileMenu() {
    const openMenuBtn = document.getElementById("menuBtn");
    const closeMenuBtn = document.getElementById("closeBtn");
    const overlay = document.getElementById("overlay");
    const menu = document.getElementById("mobileMenu");
    const mobileNav = document.querySelector("#mobileMenu > nav")
    const categoryAccordion = document.getElementById("categoryToggle")
    const categoryArrow = document.getElementById("categoryArrow")
    const categoryPanel = document.getElementById("categoryPanel")

    function openMenu() {
        menu.classList.remove("-translate-x-full");
        menu.classList.add("translate-x-0");

        overlay.classList.remove("opacity-0", "invisible");
        overlay.classList.add("opacity-100", "visible");

        document.body.classList.add("overflow-hidden");
    }

    function closeMenu() {
        menu.classList.remove("translate-x-0");
        menu.classList.add("-translate-x-full");

        overlay.classList.remove("opacity-100", "visible");
        overlay.classList.add("opacity-0", "invisible");

        document.body.classList.remove("overflow-hidden");
    }
    
    function handleResize() {
        if (window.innerWidth >= 768) closeMenu()
    }
    
    function categoryToggle() {
        const expanded = categoryAccordion.getAttribute("aria-expanded");

        if (expanded === "true") {
            categoryAccordion.setAttribute("aria-expanded", "false");
            categoryPanel.classList.replace("grid-rows-[1fr]", "grid-rows-[0fr]")
            categoryPanel.classList.replace("opacity-100", "opacity-0")
            categoryArrow.classList.remove("rotate-180")
        } else {
            categoryAccordion.setAttribute("aria-expanded", "true");
            categoryPanel.classList.replace("grid-rows-[0fr]", "grid-rows-[1fr]")
            categoryPanel.classList.replace("opacity-0", "opacity-100")
            categoryArrow.classList.add("rotate-180")
        }
    }

    openMenuBtn.addEventListener("click", openMenu);
    closeMenuBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
    mobileNav.addEventListener("click" , (e) => {if (e.target.closest("a")) closeMenu();})
    categoryAccordion.addEventListener("click", categoryToggle);
    window.addEventListener("resize", handleResize)



    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeMenu();
        }
    });
}