const tailwindAssignmentConfig = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{css,js}"],
  theme: {
    extend: {
      colors: {
          page: {
            DEFAULT: "hsl(var(--color-page))",
            foreground: "hsl(var(--color-page-foreground))",
          },
          surface: {
            DEFAULT: "hsl(var(--color-surface))",
            foreground: "hsl(var(--color-surface-foreground))",
          },
          brand: {
            DEFAULT: "hsl(var(--color-brand))",
          foreground: "hsl(var(--color-brand-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--color-muted))",
          foreground: "hsl(var(--color-muted-foreground))",
        },
        border: "hsl(var(--color-border))",
      },
    },
  },
  plugins: [],
};

if (typeof module !== "undefined") {
  module.exports = tailwindAssignmentConfig;
}

if (typeof window !== "undefined") {
  window.tailwind = window.tailwind || {};
  window.tailwind.config = tailwindAssignmentConfig;
}
