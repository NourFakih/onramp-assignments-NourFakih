const THEME_KEY = "theme";

const toggleButton = document.querySelector("[data-theme-toggle]");
const themeLabel = document.querySelector("[data-theme-label]");
const statusBadge = document.querySelector("[data-theme-status]");

function getCurrentTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function updateThemeUI(theme) {
  const isDark = theme === "dark";
  const currentTheme = isDark ? "Dark" : "Light";
  const nextTheme = isDark ? "Light" : "Dark";

  themeLabel.textContent = currentTheme;
  statusBadge.textContent = `${currentTheme} mode active`;
  toggleButton.textContent = `Switch to ${nextTheme}`;
  toggleButton.setAttribute("aria-label", `Switch to ${nextTheme.toLowerCase()} mode`);
}

function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem(THEME_KEY, theme);
  updateThemeUI(theme);
}

toggleButton.addEventListener("click", () => {
  const nextTheme = getCurrentTheme() === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});

updateThemeUI(getCurrentTheme());
