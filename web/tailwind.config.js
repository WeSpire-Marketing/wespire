const defaultTheme = require('tailwindcss/defaultTheme')

function color(variableName, opacityName) {
  return () => {
    if (opacityName) {
      return `rgba(var(${variableName}), var(${opacityName}))`
    }
    return `rgb(var(${variableName}))`
  }
}

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
        orange: '#DF6F30',
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
        cta: "url('../assets/images/ctaBg.webp')",
        ctaMobileBg: "url('../assets/images/girl.webp')",
        quotes: "url('../assets/images/quotesIcon.svg')",
        heroForm: "url('../assets/images/heroFormBg.svg')",
        snakeLine: "url('../assets/images/bg-snake-line.svg')",
        snakeLineDark: "url('../assets/images/bg-snake-line-dark.svg')",
      },
      textColor: {
        skin: {
          'h1SmallTitle-colorText': color(
            '--color-h1SmallTitle-colorText',
            '--opacity-h1SmallTitle-colorText'
          ),
          'h1SmallTitleLanding-colorText': color(
            '--color-h1SmallTitleLanding-colorText',
            '--opacity-h1SmallTitleLanding-colorText'
          ),
          'ctaButtonHeader-colorText': color(
            '--color-ctaButtonHeader-colorText',
            '--opacity-ctaButtonHeader-colorText'
          ),
          'ctaButtonHeader-colorTextHover': color(
            '--color-ctaButtonHeader-colorTextHover',
            '--opacity-ctaButtonHeader-colorTextHover'
          ),
          'ctaSubmitButtonForm-colorText': color(
            '--color-ctaSubmitButtonForm-colorText',
            '--opacity-ctaSubmitButtonForm-colorText'
          ),
          'ctaSubmitButtonForm-colorTextHover': color(
            '--color-ctaSubmitButtonForm-colorTextHover',
            '--opacity-ctaSubmitButtonForm-colorTextHover'
          ),
          'ctaSubmitButtonFormRequestDemo-colorText': color(
            '--color-ctaSubmitButtonFormRequestDemo-colorText',
            '--opacity-ctaSubmitButtonFormRequestDemo-colorText'
          ),
          'ctaSubmitButtonFormRequestDemo-colorTextHover': color(
            '--color-ctaSubmitButtonFormRequestDemo-colorTextHover',
            '--opacity-ctaSubmitButtonFormRequestDemo-colorTextHover'
          ),
          'ctaSubmitButtonFormContactUs-colorText': color(
            '--color-ctaSubmitButtonFormContactUs-colorText',
            '--opacity-ctaSubmitButtonFormContactUs-colorText'
          ),
          'ctaSubmitButtonFormContactUs-colorTextHover': color(
            '--color-ctaSubmitButtonFormContactUs-colorTextHover',
            '--opacity-ctaSubmitButtonFormContactUs-colorTextHover'
          ),
          'ctaSubmitButtonFormDark-colorText': color(
            '--color-ctaSubmitButtonFormDark-colorText',
            '--opacity-ctaSubmitButtonFormDark-colorText'
          ),
          'ctaSubmitButtonFormDark-colorTextHover': color(
            '--color-ctaSubmitButtonFormDark-colorTextHover',
            '--opacity-ctaSubmitButtonFormDark-colorTextHover'
          ),
          'ctaSubmitButtonFormLanding-colorText': color(
            '--color-ctaSubmitButtonFormLanding-colorText',
            '--opacity-ctaSubmitButtonFormLanding-colorText'
          ),
          'ctaSubmitButtonFormLanding-colorTextHover': color(
            '--color-ctaSubmitButtonFormLanding-colorTextHover',
            '--opacity-ctaSubmitButtonFormLanding-colorTextHover'
          ),
          'ctaSectionButton-colorText': color(
            '--color-ctaSectionButton-colorText',
            '--opacity-ctaSectionButton-colorText'
          ),
          'ctaSectionButton-colorTextHover': color(
            '--color-ctaSectionButton-colorTextHover',
            '--opacity-ctaSectionButton-colorTextHover'
          ),
        },
      },
      backgroundColor: {
        skin: {
          'ctaButtonHeader-colorBG': color(
            '--color-ctaButtonHeader-colorBG',
            '--opacity-ctaButtonHeader-colorBG'
          ),
          'ctaButtonHeader-colorBGHover': color(
            '--color-ctaButtonHeader-colorBGHover',
            '--opacity-ctaButtonHeader-colorBGHover'
          ),
          'ctaSubmitButtonForm-colorBG': color(
            '--color-ctaSubmitButtonForm-colorBG',
            '--opacity-ctaSubmitButtonForm-colorBG'
          ),
          'ctaSubmitButtonForm-colorBGHover': color(
            '--color-ctaSubmitButtonForm-colorBGHover',
            '--opacity-ctaSubmitButtonForm-colorBGHover'
          ),
          'ctaSubmitButtonFormRequestDemo-colorBG': color(
            '--color-ctaSubmitButtonFormRequestDemo-colorBG',
            '--opacity-ctaSubmitButtonFormRequestDemo-colorBG'
          ),
          'ctaSubmitButtonFormRequestDemo-colorBGHover': color(
            '--color-ctaSubmitButtonFormRequestDemo-colorBGHover',
            '--opacity-ctaSubmitButtonFormRequestDemo-colorBGHover'
          ),
          'ctaSubmitButtonFormContactUs-colorBG': color(
            '--color-ctaSubmitButtonFormContactUs-colorBG',
            '--opacity-ctaSubmitButtonFormContactUs-colorBG'
          ),
          'ctaSubmitButtonFormContactUs-colorBGHover': color(
            '--color-ctaSubmitButtonFormContactUs-colorBGHover',
            '--opacity-ctaSubmitButtonFormContactUs-colorBGHover'
          ),
          'ctaSubmitButtonFormDark-colorBG': color(
            '--color-ctaSubmitButtonFormDark-colorBG',
            '--opacity-ctaSubmitButtonFormDark-colorBG'
          ),
          'ctaSubmitButtonFormDark-colorBGHover': color(
            '--color-ctaSubmitButtonFormDark-colorBGHover',
            '--opacity-ctaSubmitButtonFormDark-colorBGHover'
          ),
          'ctaSubmitButtonFormLanding-colorBG': color(
            '--color-ctaSubmitButtonFormLanding-colorBG',
            '--opacity-ctaSubmitButtonFormLanding-colorBG'
          ),
          'ctaSubmitButtonFormLanding-colorBGHover': color(
            '--color-ctaSubmitButtonFormLanding-colorBGHover',
            '--opacity-ctaSubmitButtonFormLanding-colorBGHover'
          ),
          'ctaSectionButton-colorBG': color(
            '--color-ctaSectionButton-colorBG',
            '--opacity-ctaSectionButton-colorBG'
          ),
          'ctaSectionButton-colorBGHover': color(
            '--color-ctaSectionButton-colorBGHover',
            '--opacity-ctaSectionButton-colorBGHover'
          ),
        },
      },
      borderColor: {
        skin: {
          'ctaButtonHeader-colorBorder': color(
            '--color-ctaButtonHeader-colorBorder',
            '--opacity-ctaButtonHeader-colorBorder'
          ),
          'ctaButtonHeader-colorBorderHover': color(
            '--color-ctaButtonHeader-colorBorderHover',
            '--opacity-ctaButtonHeader-colorBorderHover'
          ),
          'ctaSubmitButtonForm-colorBorder': color(
            '--color-ctaSubmitButtonForm-colorBorder',
            '--opacity-ctaSubmitButtonForm-colorBorder'
          ),
          'ctaSubmitButtonForm-colorBorderHover': color(
            '--color-ctaSubmitButtonForm-colorBorderHover',
            '--opacity-ctaSubmitButtonForm-colorBorderHover'
          ),
          'ctaSubmitButtonFormRequestDemo-colorBorder': color(
            '--color-ctaSubmitButtonFormRequestDemo-colorBorder',
            '--opacity-ctaSubmitButtonFormRequestDemo-colorBorder'
          ),
          'ctaSubmitButtonFormRequestDemo-colorBorderHover': color(
            '--color-ctaSubmitButtonFormRequestDemo-colorBorderHover',
            '--opacity-ctaSubmitButtonFormRequestDemo-colorBorderHover'
          ),
          'ctaSubmitButtonFormContactUs-colorBorder': color(
            '--color-ctaSubmitButtonFormContactUs-colorBorder',
            '--opacity-ctaSubmitButtonFormContactUs-colorBorder'
          ),
          'ctaSubmitButtonFormContactUs-colorBorderHover': color(
            '--color-ctaSubmitButtonFormContactUs-colorBorderHover',
            '--opacity-ctaSubmitButtonFormContactUs-colorBorderHover'
          ),
          'ctaSubmitButtonFormDark-colorBorder': color(
            '--color-ctaSubmitButtonFormDark-colorBorder',
            '--opacity-ctaSubmitButtonFormDark-colorBorder'
          ),
          'ctaSubmitButtonFormDark-colorBorderHover': color(
            '--color-ctaSubmitButtonFormDark-colorBorderHover',
            '--opacity-ctaSubmitButtonFormDark-colorBorderHover'
          ),
          'ctaSubmitButtonFormLanding-colorBorder': color(
            '--color-ctaSubmitButtonFormLanding-colorBorder',
            '--opacity-ctaSubmitButtonFormLanding-colorBorder'
          ),
          'ctaSubmitButtonFormLanding-colorBorderHover': color(
            '--color-ctaSubmitButtonFormLanding-colorBorderHover',
            '--opacity-ctaSubmitButtonFormLanding-colorBorderHover'
          ),
          'ctaSectionButton-colorBorder': color(
            '--color-ctaSectionButton-colorBorder',
            '--opacity-ctaSectionButton-colorBorder'
          ),
          'ctaSectionButton-colorBorderHover': color(
            '--color-ctaSectionButton-colorBorderHover',
            '--opacity-ctaSectionButton-colorBorderHover'
          ),
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
}
