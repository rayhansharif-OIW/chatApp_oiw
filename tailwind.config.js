// const theme = require("@/src/theme.json")
import theme from "./src/theme.json";
let font_base = Number(theme.fonts.font_size.base.replace("px", ""));
let font_scale = Number(theme.fonts.font_size.scale);
let h6 = font_base / font_base;
let h5 = h6 * font_scale;
let h4 = h5 * font_scale;
let h3 = h4 * font_scale;
let h2 = h3 * font_scale;
let h1 = h2 * font_scale;

let fontPrimary, fontPrimaryType, fontSecondary, fontSecondaryType;
if (theme.fonts.font_family.primary) {
  fontPrimary = theme.fonts.font_family.primary
    .replace(/\+/g, " ")
    .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  fontPrimaryType = theme.fonts.font_family.primary_type;
}
if (theme.fonts.font_family.secondary) {
  fontSecondary = theme.fonts.font_family.secondary
    .replace(/\+/g, " ")
    .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  fontSecondaryType = theme.fonts.font_family.secondary_type;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [{ pattern: /^swiper-/ }, { pattern: /animation-delay:.*/ }],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // "max-sm": { max: "540px" }, // Below 640px
      // "max-md": { max: "768px" }, // Below 768px
      // "max-lg": { max: "1024px" }, // Below 1024px
      // "max-xl": { max: "1279px" }, // Below 1280px
      "max-sm": { raw: "not all and (min-width: 540px)" },
      "max-md": { raw: "not all and (min-width: 768px)" },
      "max-lg": { raw: "not all and (min-width: 1024px)" },
      "max-xl": { raw: "not all and (min-width: 1280px)" },
    },
    extend: {
      colors: {
        p1: "#2EF2FF",
        p2: "#3C52D9",
        p3: "#C8EA80",
        p4: "#EAEDFF",
        p5: "#C4CBF5",
        s1: "#080D27",
        s2: "#0C1838",
        s3: "#334679",
        s4: "#1959AD",
        s5: "#263466",
        black: {
          DEFAULT: "#000000",
          100: "#05091D",
        },

        // original_setup
        text: theme.colors.default.text_color.default,
        light: theme.colors.default.text_color.light,
        dark: theme.colors.default.text_color.dark,
        primary: theme.colors.default.theme_color.primary,
        secondary: theme.colors.default.theme_color.secondary,
        body: theme.colors.default.theme_color.body,
        background: theme.colors.default.theme_color.background,
        border: theme.colors.default.theme_color.border,
        "theme-light": theme.colors.default.theme_color.theme_light,
        "theme-dark": theme.colors.default.theme_color.theme_dark,
        
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "#E86D1F",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#3c82c0",
          foreground: "#ffffff",
        },
       
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // border: "hsl(var(--border))",
        // input: "hsl(var(--input))",
        // ring: "hsl(var(--ring))",
        // background: "hsl(var(--background))",
        // foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        // accent: {
        //   DEFAULT: "hsl(var(--accent))",
        //   foreground: "hsl(var(--accent-foreground))",
        // },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },
      },
      // extended_start
      boxShadow: {
        100: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD",
        200: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 4px 10px #3391FF",
        300: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD",
        400: "inset 0px 2px 4px 0 rgba(255, 255, 255, 0.05)",
        500: "0px 16px 24px rgba(0, 0, 0, 0.25), 0px -14px 48px rgba(40, 51, 111, 0.7)",
      },
      // extended_end
      fontSize: {
        base: `${font_base}px`,
        h1: `${h1}rem`,
        "h1-sm": `${h1 * 0.8}rem`,
        h2: `${h2}rem`,
        "h2-sm": `${h2 * 0.8}rem`,
        h3: `${h3}rem`,
        "h3-sm": `${h3 * 0.8}rem`,
        h4: `${h4}rem`,
        h5: `${h5}rem`,
        h6: `${h6}rem`,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        primary: [fontPrimary, fontPrimaryType],
        secondary: [fontSecondary, fontSecondaryType],
        inter: "var(--font-inter)",
        poppins: "var(--font-poppins)",
      },
      // extended_start
      transitionProperty: {
        borderColor: "border-color",
      },
      // extended_end
      // extended_start
      spacing: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "3/20": "15%",
        "7/20": "35%",
        "9/20": "45%",
        "11/20": "55%",
        "13/20": "65%",
        "15/20": "75%",
        "17/20": "85%",
        "19/20": "95%",
        22: "88px",
        100: "100px",
        512: "512px",
        330: "330px",
        388: "388px",
        400: "400px",
        440: "440px",
        640: "640px",
        960: "960px",
        1230: "1230px",
      },
      zIndex: {
        1: "1",
        2: "2",
        4: "4",
      },
      lineHeight: {
        12: "48px",
      },
      borderRadius: {
        14: "14px",
        20: "20px",
        40: "40px",
        half: "50%",
        "7xl": "40px",
      },
      flex: {
        50: "0 0 50%",
        320: "1px 0 320px",
        300: "0 0 300px",
        540: "0 0 540px",
        280: "0 0 280px",
        256: "0 0 256px",
        100: "0 0 100%",
      },
      // extended_end
      keyframes: {
        bounceCustom: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20%)" },
        },
        showThumbnail: {
          from: { width: "0", opacity: "0" },
          // You may add a "to" state if required
        },
        showThumbnailBackward: {
          "0%": { width: "0", opacity: "0" },
          "60%": {
            width: "var(--thumb-intermediate-width, 120px)",
            opacity: "0",
          },
          "90%": { width: "var(--thumb-final-width, 150px)", opacity: "0" },
          "100%": { width: "var(--thumb-final-width, 150px)", opacity: "1" },
        },
        effectNext: {
          from: { transform: "translateX(150px)" },
        },
        effectPrev: {
          from: { transform: "translateX(150px)" },
        },
        showImage: {
          to: {
            bottom: "0",
            left: "0",
            width: "100%",
            height: "100%",
            borderRadius: "0",
          },
        },
        outFrame: {
          to: {
            width: "var(--outframe-width, 150px)",
            height: "var(--outframe-height, 220px)",
            bottom: "50px",
            left: "25%",
            borderRadius: "20px",
          },
        },
        showContent: {
          to: { filter: "blur(0)", opacity: "1" },
        },
        contentOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        "bounce-custom": "bounceCustom 1s ease-in-out infinite",
        showThumbnail: "showThumbnail 0.5s linear forwards",
        showThumbnailBackward: "showThumbnailBackward 0.5s linear forwards",
        effectNext: "effectNext 0.5s linear forwards",
        effectPrev: "effectPrev 0.5s linear forwards",
        showImage: "showImage 0.5s linear forwards",
        outFrame: "outFrame 0.5s linear forwards",
        showContent: "showContent 1s ease-in-out infinite",
        contentOut: "contentOut 0.3s ease-out forwards",
      },

      gridTemplateAreas: {
        mobile: [
          "b b b b b b b b b b b b",
          "b b b b b b b b b b b b",
          "b b b b b b b b b b b b",
          "b b b b b b b b b b b b",
          "c c c c c c d d d d d d",
          "c c c c c c d d d d d d",
          "c c c c c c d d d d d d",
          "c c c c c c d d d d d d",
          "c c c c c c d d d d d d",
        ],
        desktop: [
          ". . . . . . . . . c c c",
          ". . . . . . . . . c c c",
          ". . . . . . . . . c c c",
          ". . . . . . . . . c c c",
          ". . . . . . . . . c c c",
          ". . . . . . . . . c c c",
          "b b b . . . . . . d d d",
          "b b b . . . . . . d d d",
          "b b b . . . . . . d d d",
        ],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@savvywombat/tailwindcss-grid-areas"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-bootstrap-grid")({
      generateContainer: false,
      gridGutterWidth: "2rem",
      gridGutters: {
        1: "0.25rem",
        2: "0.5rem",
        3: "1rem",
        4: "1.5rem",
        5: "3rem",
      },
    }),
  ],
};
