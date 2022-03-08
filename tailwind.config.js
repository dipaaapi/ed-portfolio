module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#04092e',
        blueg: '#5463FF',
        redg: '#D82148',
        whiteg: '#ECECEC'
      },
      fontFamily: {
        main: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
