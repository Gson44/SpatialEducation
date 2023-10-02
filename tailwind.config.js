/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", './learnMore.html', './course.html'],
  theme: {
    extend: {
      backgroundImage: {
        'index-dashboard': "url('./vr.jpg')",
      },
      height: {
       'image-size': '50%'
      }
    },
  },
  plugins: [
   
  ],
}

