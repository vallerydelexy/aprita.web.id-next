module.exports = {
  darkMode: 'class',
  content: [
  "./app/**/*.{js,ts,jsx,tsx}", 
  "./components/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      animation: {
        'pulse-fast': 'pulse 0.3s linear infinite',
      }
    },
    
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
