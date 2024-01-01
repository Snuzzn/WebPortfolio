module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      blur: {
        xs: "4px",
      },
      outline: {
        teal: "1px solid #57FFF5",
      },
      fontSize: { "9xl": "6.5rem" },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        valhalla: {
          light: "#2A314B",
          deep: "#2C3248",
          blue: "#242743",
          mirage: "#1E1E3A",
          midnight: "#201d3c",
          DEFAULT: "#272A3E",
        },
        clay: {
          DEFAULT: "#404069",
        },
        teal: {
          light: "#43F1E7",
          DEFAULT: "#57FFF5",
          lightDark: "#3BDAD1",
          dark: "#31CEC5",
          xdark: "#1AA39A",
        },
        textShadow: {
          teal: "1px 1px 4px #31CEC5",
        },
      },
      animation: {
        fade: "fadeIn 300ms ease-in",
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        slide: "slide 700ms ease-in",
      },
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
        pulse: {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
        },
        slide: {
          "0%": {
            width: 0,
          },
          "100%": {
            width: "100%",
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
