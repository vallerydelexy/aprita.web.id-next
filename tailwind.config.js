module.exports = {
  //mode: "jit",
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}", 
  "./components/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      animation: {
        'pulse-fast': 'pulse 0.3s linear infinite',
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
