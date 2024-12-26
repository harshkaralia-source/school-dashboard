import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        Sky:'#C3EBFA',
        SkyLight:'#EDF9FD',
        MyPurple: '#CFCEFF',
        PurpleLight: '#F1F0FF',
        MyYellow: '#FAE27C',
        YellowLight: '#FEFCEB'
      }
    },
  },
  plugins: [],
} satisfies Config;
