/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '1200px',
        // => @media (min-width: 640px) { ... }
  
        'md': '1000px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '900px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '2036px',
        // => @media (min-width: 1536px) { ... }
      },
      width:{
        690:'699px'
      },
      height:{
        18:'72px'
      },
      margin:{
        7:'72px'
      },
      colors:{
        'sea': '#092635',
        'sidebar':'#1B4242',
        'slate':"rgb(148 163 184)",
        'boxSha':"rgba(0, 0, 0, 0.3)"
      },
      boxShadow: {
        'sha': '5px 5px 10px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'gradient-animation': 'gradient-animation 18s ease infinite',
      },
      keyframes: {
        'gradient-animation': {
          '0%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
      },
      backgroundImage: {
        'gradient-background': 'linear-gradient(300deg,  rgb(203 213 225) ,rgb(148 163 184), rgb(71 85 105))',
      },
      backgroundSize: {
        '180%': '180%',
      },
      
    },
  },
  plugins: [],
}

