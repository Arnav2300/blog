/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      colors: {
        'Black':'#222831',
        'Grey':'#393E46',
        'Teal':'#00ADB5',
        'White':'#EEEEEE',
        'Navy': '#176B87',
        'Mint': '#DAFFFB',
      },
      fontFamily: {
        BarlowSC: ["Barlow Semi Condensed", "sans-serif"],
       },
    },
  },
  plugins: [],
};
