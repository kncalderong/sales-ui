/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#2f98ed',
      },
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
      },
      keyframes: {
        spinnerKeyframe: {
          '0%': {
            opacity: 1,
            transform: 'scaleY(0)',
          },
          '50%': {
            opacity: 1,
            transform: 'scaleY(0.5)',
          },
          '100%': {
            opacity: 1,
            transform: 'scaleY(1.8)',
          },
        },
      },
      animation: {
        spinnerAnimation:
          'spinnerKeyframe 1s linear infinite alternate-reverse',
      },
    },
  },
  plugins: [],
}
