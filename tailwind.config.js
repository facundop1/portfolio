/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '320px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
      colors: {
        primary: "#494949",
        cards: "#d3d3d3",
        porcent: "#0000001a",
      },
      backgroundImage: {
        "header-pfp": "url('/src/assets/foto-perfil.jpg')",
        "hobbies-gaming": "url('/src/assets/leftside/gaming.jpg')",
        "hobbies-music": "url('/src/assets/leftside/musica.jpg')",
        "hobbies-lenguages": "url('/src/assets/leftside/idiomas.jpg')",
        "formacion-argprograma": "url('/src/assets/rightside/ArgentinaPrograma.png')",
        "formacion-one": "url('/src/assets/rightside/ONE.png')",
        "proyects-encryptor": "url('/src/assets/Proyects/Encriptador.png')",
        "proyects-hangman": "url('/src/assets/Proyects/Ahorcado.jpg')",
        "proyects-converter": "url('/src/assets/Proyects/Conversor.jpg')",
        "proyects-hotel": "url('/src/assets/Proyects/Hotel.jpg')",
      },
    },
  },
  plugins: [],
}
