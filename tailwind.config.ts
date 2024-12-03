import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "serif"],
        montserrat: ["var(--font-montserrat)", "serif"],
        atkinsonHyperlegible: ["var(--font--atkinsonHyperlegible)", "serif"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        border: "hsl(var(--border)/<alpha-value>)",
        input: "hsl(var(--input)/<alpha-value>)",
        ring: "hsl(var(--ring)/<alpha-value>)",
        background: "hsl(var(--background)/<alpha-value>)",
        foreground: "hsl(var(--foreground)/<alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary)/<alpha-value>)",
          foreground: "hsl(var(--primary-foreground)/<alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary)/<alpha-value>)",
          foreground: "hsl(var(--secondary-foreground)/<alpha-value>)",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive)/<alpha-value>)",
          foreground: "hsl(var(--destructive-foreground)/<alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted)/<alpha-value>)",
          foreground: "hsl(var(--muted-foreground)/<alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent)/<alpha-value>)",
          foreground: "hsl(var(--accent-foreground)/<alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover)/<alpha-value>)",
          foreground: "hsl(var(--popover-foreground)/<alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card)/<alpha-value>)",
          foreground: "hsl(var(--card-foreground)/<alpha-value>)",
        },
      },

      safelist: [
        {
          pattern:
            /(bg|border|text)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)/,
        },
      ],

      borderRadius: {
        DEFAULT: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      boxShadow: {
        DEFAULT: "0 2px 3px rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 10%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
