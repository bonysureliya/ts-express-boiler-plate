/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        keyframes: {
            wiggle: {
                '0%, 100%': {
                    transform: 'rotate(-20deg)'
                },
                '50%': {
                    transform: 'rotate(20deg)'
                },
            }
        },
        animation: {
            wiggle: 'wiggle 1s ease-in-out infinite',
        }
    },
},
    plugins: [],
  }
