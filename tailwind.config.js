/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './app/**/*.vue',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        kunista: {
          red: '#C8102E',
          'red-dark': '#A00D26',
          black: '#1A1A1A',
          gray: '#F4F4F5',
          'gray-dark': '#71717A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
