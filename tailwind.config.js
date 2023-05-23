/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage:{'backgroundImage': "url('https://shreethemes.in/upwind_react/assets/images/bg.jpg')",},
      colors: {
        'backgroundColor':"#1E2338E6",
    },
    screens:{
      'androidPhones':'400px',
      'iphone':'300px',
    },
    },
  plugins: [],
}
}

