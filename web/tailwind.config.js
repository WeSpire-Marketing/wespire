const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        screen: '1025px',
        screen2: '1023px',
        screen3: '1289px',
        screen4: '564px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#121212',
            img: {
              borderRadius: '16px',
              overflow: 'hidden',
            },
            li: {
              fontSize: '18px',
            },
            a: {
              color: '#1771DC',
              fontSize: '18px',
              fontWeight: '600',
              lineHeight: '160%',
              '&:hover': {
                color: '#121212',
              },
            },
          },
        },
      },
      colors: {
        error: '#E74444',
        secondary: '#383838',
        smart: '#1771DC',
        black: '#121212',
        gallery: '#F9FBFF',
        grey1: '#9E9E9E',
        grey2: '#CACDD4',
        pampas: '#DEEBFD',
        helpful: '#EA7F49',
        thriving: '#3C8F73',
        neverPreachy: '#FFCC7B',
        practical: '#6F879A',
      },
      fontFamily: {
        nunito: ['Nunito', ...defaultTheme.fontFamily.sans],
        poppins: ['poppins', ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        130: '130%',
        160: '160%',
      },
      backgroundImage: {
        cta: "url('../assets/images/ctaBg.png')",
        ctaMobileBg: "url('../assets/images/girl.png')",
        quotes: "url('../assets/images/quotesIcon.svg')",
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
