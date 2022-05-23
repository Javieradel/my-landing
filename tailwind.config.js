module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        black: {
          100: '#242936',
        },
        gray:{
          100: '#CCCAC2'
        },
        blue: {
          100: '#80BFFF',
          200: '#73D0FF',
          300: '#95E6CB'
          },
        orange: {
          100: '#FFAD66'
        }
        }
      }
    },
  plugins: [],
}
