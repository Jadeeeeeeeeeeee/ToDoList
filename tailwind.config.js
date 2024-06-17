/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '10/10' : '100%',
        '9/10' : '90%',
        '8/10' : '80%',
        '7/10' : '70%',
        '6/10' : '60%',
        '5/10' : '50%',
        '4/10' : '40%',
        '3/10' : '30%',
        '2/10' : '20%',
        '1/10' : '10%',
      }
    },
  },
  plugins: [],
}

