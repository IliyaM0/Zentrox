export function initThemeToggle() {
    const themeBtn = document.getElementById("themeToggle");
    const mobileThemeBtn = document.getElementById("mobileThemeToggle");
    const moonIcon = document.getElementById("moonIcon");
    const sunIcon = document.getElementById("sunIcon");
    const mobileMoonIcon = document.getElementById("mobileMoonIcon");
    const mobileSunIcon = document.getElementById("mobileSunIcon");


    function initTheme() {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            if (savedTheme === "dark") {
                document.documentElement.classList.add("dark");
                moonIcon.classList.add("hidden");
                sunIcon.classList.remove("hidden");
                mobileMoonIcon.classList.add("hidden");
                mobileSunIcon.classList.remove("hidden");
            } else {
                document.documentElement.classList.remove("dark");
                moonIcon.classList.remove("hidden");
                sunIcon.classList.add("hidden");
                mobileMoonIcon.classList.remove("hidden");
                mobileSunIcon.classList.add("hidden");
            }
        } else {
            const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

            if (systemDark) {
                document.documentElement.classList.add("dark");
                moonIcon.classList.add("hidden");
                sunIcon.classList.remove("hidden");
                mobileMoonIcon.classList.add("hidden");
                mobileSunIcon.classList.remove("hidden");
            } else {
                document.documentElement.classList.remove("dark");
                moonIcon.classList.remove("hidden");
                sunIcon.classList.add("hidden");
                mobileMoonIcon.classList.remove("hidden");
                mobileSunIcon.classList.add("hidden");
            }
        }
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.classList.contains("dark");

        if (currentTheme) {
            document.documentElement.classList.remove("dark");
            moonIcon.classList.remove("hidden");
            sunIcon.classList.add("hidden");
            mobileMoonIcon.classList.remove("hidden");
            mobileSunIcon.classList.add("hidden");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            moonIcon.classList.add("hidden");
            sunIcon.classList.remove("hidden");
            mobileMoonIcon.classList.add("hidden");
            mobileSunIcon.classList.remove("hidden");
            localStorage.setItem("theme", "dark");
        }
    }

    initTheme();
    themeBtn.addEventListener("click", toggleTheme);
    mobileThemeBtn.addEventListener("click", toggleTheme);
}