import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      container: '1440px',
      contentContainer: '1140px',
      containerSmall: '1024px',
      containerXS: '768px',
    },
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        titleFont: ['Inter', 'sans-serif'],
        bodyFont: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        navbarShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
      },
      colors: {},
    },
  },
  plugins: [],
}
export default config
