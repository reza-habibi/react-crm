module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      "2xs": "300px",
      xs: "480px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    keyframes: {
      bounce: {
        " 0%, 100%": {
          transform: "translateY(-25%)",
          animation_timing_function: "cubic-bezier(0.8, 0, 1, 1)",
        },
        "50%": {
          transform: "translateY(0)",
          animation_timing_function: "cubic-bezier(0, 0, 0.2, 1)",
        },
      },
      spin: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },

      wiggle: {
        "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
      "fade-in-down": {
        "0%": {
          opacity: "0",
          transform: "translateY(-10px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
      "fade-in-right": {
        "0%": {
          opacity: "0",
          transform: "translateX(-10px)",
        },
        "100%": {
          height: "1",
          transform: "translateX(0)",
        },
      },
      "drawer-right": {
        "0%, 100%": { right: "-500px" },
        "100%": { right: "0" },
      },
      "drawer-right-close": {
        "0%, 100%": { right: "0" },
        "100%": { right: "-500px" },
      },
      // if you are using drawer variant left
      "drawer-left": {
        "0%, 100%": { left: "-500px" },
        "100%": { left: "0" },
      },
      // if you are using drawer variant top
      "drawer-top": {
        "0%, 100%": { top: "-500px" },
        "100%": { top: "0" },
      },
      // if you are using drawer variant bottom
      "drawer-bottom": {
        "0%, 100%": { bottom: "-500px" },
        "100%": { bottom: "0" },
      },
    },
    animation: {
      bounce: "bounce 1s infinite",

      spin: "spin 1s linear infinite",
      wiggle: "wiggle 1s ease-in-out infinite",
      bounce200: "bounce 1s infinite 200ms",
      bounce400: "bounce 1s infinite 400ms",
      bounce600: "bounce 1s infinite 600ms",

      "fade-in-down": "fade-in-down 0.5s ease-out",
      "fade-in-right": "fade-in-right 0.5s ease-out",
      left: "left 0.3s",
      right: "right 0.3s",
      // if you are using the animate variant of the modal
      modal: "modal 0.3s",
      // if you are using drawer variant right
      "drawer-right": "drawer-right 1s ease-in",
      "drawer-right-close": "drawer-right-close 2s ease-in",

      // if you are using drawer variant left
      "drawer-left": "drawer-left 0.3s",
      // if you are using drawer variant top
      "drawer-top": "drawer-top 0.3s",
      // if you are using drawer variant bottom
      "drawer-bottom": "drawer-bottom 0.3s",
    },
    modal: {
      "0%, 100%": { top: "-500px" },
      "100%": { top: "0" },
    },
    /* If you are using Toast component*/
    left: {
      "0%, 100%": { transform: "translateX(-100%)" },
      "100%": { transform: "translateX(0)" },
    },
    right: {
      "0%, 100%": { transform: "translateX(100%)" },
      "100%": { transform: "translateX(0)" },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    aspectRatio: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
    },
    extend: {
      width: {
        "mb-cat": "166px",
      },
      height: {
        "mb-cat": "96px",
        100: "28rem",
        120: "40rem",
      },
      backgroundImage: (theme) => ({
        women: "url('../src/assets/images/mobile/category-women.png')",
        men: "url('../src/assets/images/mobile/category-men.png')",
        kids: "url('../src/assets/images/mobile/category-kids.png')",
        beauty: "url('../src/assets/images/mobile/category-beauty.png')",
      }),
      fontFamily: {
        yekan: ["iranyekan"],
      },
      colors: {
        pelorous: {
          DEFAULT: "#41C1C6",
          50: "#F2FBFB",
          100: "#DEF4F5",
          200: "#B7E7E9",
          300: "#8FDBDE",
          400: "#68CED2",
          500: "#41C1C6",
          600: "#319FA3",
          700: "#25797C",
          800: "#195255",
          900: "#0E2C2D",
        },
        "vanilla-ice": {
          DEFAULT: "#F7E2E7",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#F7E2E7",
          600: "#ECBAC6",
          700: "#E192A5",
          800: "#D66A84",
          900: "#CB4263",
        },
        "we-kids": {
          DEFAULT: "#F7DFDD",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#F7DFDD",
          600: "#EDB8B4",
          700: "#E4918A",
          800: "#DA6A61",
          900: "#D04438",
        },
        "beauty-bush": {
          DEFAULT: "#F1C9C2",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FBEEEB",
          500: "#F1C9C2",
          600: "#E7A499",
          700: "#DE806F",
          800: "#D45B46",
          900: "#BC412B",
        },
        "we-peep": {
          DEFAULT: "#F5D7D9",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#F5D7D9",
          600: "#EBAEB2",
          700: "#E1858B",
          800: "#D65D65",
          900: "#CC343E",
        },
        violet: {
          50: "#f7fafb",
          100: "#e3f0fd",
          200: "#c6d8fb",
          300: "#9eb4f5",
          400: "#7d8cee",
          500: "#6767e8",
          600: "#544add",
          700: "#4038c0",
          800: "#2d2692",
          900: "#18185d",
        },
        navyBlue: {
          50: "#f8fafb",
          100: "#e8f2fb",
          200: "#ccddf7",
          300: "#a2baeb",
          400: "#7892db",
          500: "#5e6dcb",
          600: "#4b51b5",
          700: "#393c8f",
          800: "#272864",
          900: "#0c1559",
        },
        grey: {
          50: "#f8f9f7",
          100: "#f0f0f1",
          200: "#dedae0",
          300: "#bcb6bf",
          400: "#968f9a",
          500: "#7a6e78",
          600: "#64535d",
          700: "#4d3f47",
          800: "#352c32",
          900: "#221c20",
        },
        "wild-sand": {
          DEFAULT: "#F5F5F5",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#F5F5F5",
          600: "#DCDCDC",
          700: "#C2C2C2",
          800: "#A9A9A9",
          900: "#8F8F8F",
        },
      },
    },
    variants: {
      /* If you are using Collapse or Accordion component*/
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {
    aspectRatio: ["responsive", "hover"],
    accessibility: ["responsive", "focus-within", "focus"],
    alignContent: ["responsive"],
    alignItems: ["responsive"],
    alignSelf: ["responsive"],
    animation: ["responsive", "motion-safe", "motion-reduce"],
    appearance: ["responsive"],
    backdropBlur: ["responsive"],
    backdropBrightness: ["responsive"],
    backdropContrast: ["responsive"],
    backdropDropShadow: ["responsive"],
    backdropFilter: ["responsive"],
    backdropGrayscale: ["responsive"],
    backdropHueRotate: ["responsive"],
    backdropInvert: ["responsive"],
    backdropSaturate: ["responsive"],
    backdropSepia: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundBlendMode: ["responsive"],
    backgroundClip: ["responsive"],
    backgroundColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    backgroundImage: ["responsive"],
    backgroundOpacity: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    backgroundOrigin: ["responsive"],
    blur: ["responsive"],
    borderCollapse: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    borderColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    borderOpacity: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    borderRadius: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    borderStyle: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    borderWidth: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    boxDecorationBreak: ["responsive"],
    boxShadow: ["responsive", "group-hover", "focus-within", "hover", "focus"],
    boxSizing: ["responsive"],
    brightness: ["responsive"],
    clear: ["responsive"],
    container: ["responsive"],
    contrast: ["responsive"],
    cursor: ["responsive"],
    display: ["responsive"],
    divideColor: ["responsive", "dark"],
    divideOpacity: ["responsive", "dark"],
    divideStyle: ["responsive"],
    divideWidth: ["responsive"],
    dropShadow: ["responsive"],
    fill: ["responsive"],
    filter: ["responsive"],
    flex: ["responsive"],
    flexDirection: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    flexWrap: ["responsive"],
    float: ["responsive"],
    fontFamily: ["responsive"],
    fontSize: ["responsive"],
    fontSmoothing: ["responsive"],
    fontStyle: ["responsive"],
    fontVariantNumeric: ["responsive"],
    fontWeight: ["responsive"],
    gap: ["responsive"],
    gradientColorStops: ["responsive", "dark", "hover", "focus"],
    grayscale: ["responsive"],
    gridAutoColumns: ["responsive"],
    gridAutoFlow: ["responsive"],
    gridAutoRows: ["responsive"],
    gridColumn: ["responsive"],
    gridColumnEnd: ["responsive"],
    gridColumnStart: ["responsive"],
    gridRow: ["responsive"],
    gridRowEnd: ["responsive"],
    gridRowStart: ["responsive"],
    gridTemplateColumns: ["responsive"],
    gridTemplateRows: ["responsive"],
    height: ["responsive"],
    hueRotate: ["responsive"],
    inset: ["responsive"],
    invert: ["responsive"],
    isolation: ["responsive"],
    justifyContent: ["responsive"],
    justifyItems: ["responsive"],
    justifySelf: ["responsive"],
    letterSpacing: ["responsive"],
    lineHeight: ["responsive"],
    listStylePosition: ["responsive"],
    listStyleType: ["responsive"],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    mixBlendMode: ["responsive"],
    objectFit: ["responsive"],
    objectPosition: ["responsive"],
    opacity: ["responsive", "group-hover", "focus-within", "hover", "focus"],
    order: ["responsive"],
    outline: ["responsive", "focus-within", "focus"],
    overflow: ["responsive"],
    overscrollBehavior: ["responsive"],
    padding: ["responsive"],
    placeContent: ["responsive"],
    placeItems: ["responsive"],
    placeSelf: ["responsive"],
    placeholderColor: ["responsive", "dark", "focus"],
    placeholderOpacity: ["responsive", "dark", "focus"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    resize: ["responsive"],
    ringColor: ["responsive", "dark", "focus-within", "focus"],
    ringOffsetColor: ["responsive", "dark", "focus-within", "focus"],
    ringOffsetWidth: ["responsive", "focus-within", "focus"],
    ringOpacity: ["responsive", "dark", "focus-within", "focus"],
    ringWidth: ["responsive", "focus-within", "focus"],
    rotate: ["responsive", "hover", "focus"],
    saturate: ["responsive"],
    scale: ["responsive", "hover", "focus", "active", "group-hover"],
    sepia: ["responsive"],
    skew: ["responsive", "hover", "focus"],
    space: ["responsive"],
    stroke: ["responsive"],
    strokeWidth: ["responsive"],
    tableLayout: ["responsive"],
    textAlign: ["responsive"],
    textColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    textDecoration: [
      "responsive",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    textOpacity: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    textOverflow: ["responsive"],
    textTransform: ["responsive"],
    transform: ["responsive"],
    transformOrigin: ["responsive"],
    transitionDelay: ["responsive"],
    transitionDuration: ["responsive"],
    transitionProperty: ["responsive"],
    transitionTimingFunction: ["responsive"],
    translate: ["responsive", "hover", "focus"],
    userSelect: ["responsive"],
    verticalAlign: ["responsive"],
    visibility: ["responsive"],
    whitespace: ["responsive"],
    width: ["responsive"],
    wordBreak: ["responsive"],
    zIndex: ["responsive", "focus-within", "focus"],
    extend: {
      divideWidth: ["hover", "focus"],
      borderWidth: ["hover", "focus"],
      backgroundColor: ["active", "checked"],
      inset: ["checked"],
      opacity: ["disabled"],
      textColor: ["active"],
    },
  },
  plugins: [
    require("tailwindcss-rtl"),
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("tailwindcss-children"),
  ],
  corePlugins: {},
};
