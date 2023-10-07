/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", './learnMore.html', './course.html', './appointment.html'],
  theme: {
    extend: {
      backgroundImage: {
        'index-dashboard': "url('./vr.jpg')",
        'logo': "url('./Spatial.Edu.png",
        'index-dashboard-mobile': "url('./vr.jpg')",
        'index-dashboard-desktop': "url('./vr.jpg')"
        
      },
      height: {
       'image-size': '50%'
      }
    },
  },
  plugins: [
   
  ],
}

