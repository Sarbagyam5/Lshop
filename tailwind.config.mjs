/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        buzz: "buzz 0.3s ease-in-out 3",
      },
      keyframes: {
        buzz: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
        },
      },
      colors: {
        'grey-darkest': '#1a1a1a', 
        'blue-dark': '#b7e0e6 ', 
        'blue' : '#b7e0e6',
        'gold' : '#FFD700' 
      },
    },
  },
  plugins: [],

};
