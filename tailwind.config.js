/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scale: {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        scale: "scale 200ms ease-in-out",
      },
      colors: {
        "theme-primary": "var(--svyr-primary)",
        "theme-primary-disabled": "var(--svyr-primary-disabled)",
        "theme-secondary": "var(--svyr-secondary)",
        "theme-tertiary": "var(--svyr-tertiary)",
        "theme-background": "var(--svyr-background)",
        "theme-surface": "var(--svyr-surface)",
        "theme-selected": "var(--svyr-selected)",
        "theme-grey": "var(--svyr-grey)",
        "theme-container": "var(--svyr-container)",
        "theme-error": "var(--svyr-error)",
        "theme-on-primary": "var(--svyr-on-primary)",
        "theme-on-secondary": "var(--svyr-on-secondary)",
        "theme-on-background": "var(--svyr-on-background)",
        "theme-on-surface": "var(--svyr-on-surface)",
        "theme-on-error": "var(--svyr-on-error)",
        "theme-shadow": "var(--svyr-shadow)",
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
