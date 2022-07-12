/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-primary": "var(--primary)",
        "theme-primary-disabled": "var(--primary-disabled)",
        "theme-secondary": "var(--secondary)",
        "theme-tertiary": "var(--tertiary)",
        "theme-background": "var(--background)",
        "theme-surface": "var(--surface)",
        "theme-selected": "var(--selected)",
        "theme-grey": "var(--grey)",
        "theme-container": "var(--container)",
        "theme-error": "var(--error)",
        "theme-on-primary": "var(--on-primary)",
        "theme-on-secondary": "var(--on-secondary)",
        "theme-on-background": "var(--on-background)",
        "theme-on-surface": "var(--on-surface)",
        "theme-on-error": "var(--on-error)",
        "theme-shadow": "var(--shadow)",
      },
      fontFamily: {
        inter: ["Inter Regular", "sans-serif"],
        "inter-medium": ["Inter Medium", "sans-serif"],
        "inter-semibold": ["Inter SemiBold", "sans-serif"],
      },
      screens: {
        wide: "1600px",
      },
    },
  },
  plugins: [],
  prefix: "svyr-",
  // corePlugins: {
  //   preflight: false,
  // },
}
