/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gold-500":"#E4B40D",
        "gold-400":"#F9D423",
        "gold-300":"#FBD966",
        "fancy-gray":"#9E9E9E",
        "gray-300":"#ECF1F0",
        "gray-text":"#B6B6B6",
        "gray-text-2":"#BAB8B8",
        "gray-800":"#202B34",
        "blue--900":"#071624"
      },
      fontFamily:{
        "Raleway":["Raleway", "sans serif"],
        "Neue":["NeueMachina", "sans serif" ]
      },
      fontWeight: {
        ultrabold: '900',
        regular: '400',
        light: '300'
      },
    },
   
  },
  plugins: [
    require('@codaworks/react-glow/tailwind')
  ]
}

