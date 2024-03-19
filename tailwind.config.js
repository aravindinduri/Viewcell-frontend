/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {

    fontFamily: {
      Poppins: ['"Poppins"', "Madimi One"],
      Oswald : ['"Poppins"',"Oswald" ]
      // Add more custom font families as needed
    },
    extend: {},
  },
  plugins: [],
}

