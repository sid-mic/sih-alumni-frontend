module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        indblue: "#394686",
      },
      backgroundImage: {
        imgoverlay: "url('/img/hero-pattern.svg')",

        "footer-texture": "url('/img/footer-texture.png')",
      },

      animation: {
        fade: "fadeOut 5s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.red.300") },
          "100%": { backgroundColor: theme("colors.transparent") },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
