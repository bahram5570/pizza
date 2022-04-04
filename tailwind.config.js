module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      keyframes: {
        homeSlider: {
          '0%': {transform: 'translateX(0)'},
          '10%': {transform: 'translateX(calc(380px * -1))'},
          '20%': {transform: 'translateX(calc(380px * -1))'},
          '30%': {transform: 'translateX(calc(380px * -2))'},
          '40%': {transform: 'translateX(calc(380px * -2))'},
          '50%': {transform: 'translateX(calc(380px * -3))'},
          '60%': {transform: 'translateX(calc(380px * -3))'},
          '70%': {transform: 'translateX(calc(380px * -4))'},
          '80%': {transform: 'translateX(calc(380px * -4))'},
          '90%': {transform: 'translateX(calc(380px * -5))'},
          '100%': {transform: 'translateX(calc(380px * -5))'},
        },
      },
      fontFamily: {
        Shabnam: ['Shabnam']
      },
      colors: {
        headerRed: '#BF0B28'
      },
    },
  },
  plugins: [],
}
