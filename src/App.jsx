import BackToTopButton from "./components/BackToTopBtn";
import { ContentMain } from "./components/ContentMain";
import { Proyects } from "./components/Proyects";

function App() {
  return (
    <div className="relative z-0 ">
      <header className="bg-cards flex sm:p-4 sm:flex-col sm:gap-1 sm:rounded lg:flex-row xl:justify-between">
        <div className="bg-header-pfp sm:w-28 sm:h-28 rounded-full sm:mx-auto bg-cover md:w-40 md:h-40 xl:mx-10" />
        <div className="flex sm:flex-col sm:gap-2 lg:max-w-sm xl:max-w-xl 2xl:max-w-4xl">
          <h1 className="font-semibold text-lg">Facundo Paez</h1>
          <h2 className="font-medium text-stone-500">
            Desarrollador front-end
          </h2>
          <p className="">
            Soy estudiante de programacion y actualmente estoy estudiando de
            forma autodidacta y en Argentina Programa 4.0. Tengo 23 años y
            Argentino. Desde principios del 2022, estoy aprendiendo programacion
            de forma autodidacta y estudie en el programa ONE - Oracle Next
            Education. Desde que era niño estuve en contacto con la computacion.
            Soy una persona con mucha creatividad e ideas, me gusta trabajar con
            grupos, aprender y enseñar de mis compañeros.
          </p>
        </div>
        <div className="flex sm:gap-2 flex-col sm:pt-2">
          <a
            href="https://github.com/facundop1"
            className="font-bold hover:text-stone-500 hover:transition hover:duration-300"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWBJREFUSEu1lY1NAzEMhV83gUkKm8AktJMAkwCTwCZU3ymOXv7ucpXOUlQ1sf38XmLfSQfb6eD8mgF4ksQ6p98/SawfSd9pDetcA3iQ9J6SrhEF7DmBNn4jgIuktx3yAfIpibjCegAvqfId+bPrtQapAZDlN7mj76skAIMNlWL4YSTEj3PuiXNi2FusBvgyzT+ScySM5L3/Lil+jz2AWhoH2JKLx0B8GJe+sHAGNUB22sqeJAtpQ7rlwh3AqyhoTgDg4vJSPQUWAFQQl5cdJpPj1i3QGTjAPQw8PhfvAE7xHoB/Y5sfiAPU3bvnFQ1jHYBGgYVb05nVOXfmjbj6TOMlEEQ3AkiHxvRkz5vNJXXc4oGMRkVMyBgBMTY8Ud1cTfW9UcFe6LklT2/iwpK7y7Y1rkMeRnERaIVEsib5iEEE+AenxyYYNBN0hoH7RHf7BXM+2i8e2sw3ece0aF0PB7gBWc9YGRupb4AAAAAASUVORK5CYII="
              alt="github"
              className="inline sm:pr-1"
            />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/facundopaez22/"
            className="font-bold hover:text-stone-500 hover:transition hover:duration-300"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANpJREFUSEvtldENwjAMBV83oZvAJjBJ2QQ2gU0ok4BOipFJGyLFSr+wFFVVYl/87CSDOtvQOb42B9wk7YNZzZJGi5Fn8AoGX8T9BbhLYjfHBugnbglwlXRKgVtkqwLY/SEBLg1ZVAFIA+QpaeohEQAGtksDoP3ztTXM551XzcDXwCQyJwtmQGDnLNMQYE0xsni4iTDAOotOI1vMd1sIgEQEw0rtHAJw8KhLDvDt/AfEJbKTjM4UlTa0bvEHa20dPtUaNNwOXy5FQMvFlm/GX5TbP5lRaRb+3R/9NwReTBmWBSIqAAAAAElFTkSuQmCC"
              alt="linkedin"
              className="inline sm:pr-1"
            />
            Linkedin
          </a>
          <a
            href="mailto:facupv123@gmail.com"
            className="font-bold hover:text-stone-500 hover:transition hover:duration-300"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANdJREFUSEvtldENwjAMRF83gU1gE5gEmASYhG4Cm4CuSiQTErlJ25+KfEaJn+/sOB0Lr27h+KwLsAOuwGaibS/gCPSKYy16AILMsQTZpoB3iHwBTo2UG3AId4fkrYII0F6tXdYWG6cIEFy1UDaeGmUtz+Odp6dA2dyBczhYUvNVzKBadYyraFE8oFpESKomzTqn1AUIlFOj/aEFM1nb3hgFyKkZW58qgFWj7K3XpY6uBtQ+jT/AdezHojmHnRphn84ivViNhakTtTiuXc0tB9b1ZbY44N75ADyuMhm5wq38AAAAAElFTkSuQmCC"
              alt="mail"
              className="inline sm:pr-1"
            />
            facupv123@gmail.com
          </a>
        </div>
      </header>

      <br />

      <main>
        <ContentMain />

        <br />

        <Proyects />
      </main>

      <br />

      <footer className="py-4">
        <h1 className="text-center text-base font-bold">
          Desarrollado por{" "}
          <a href="https://github.com/facundop1" className="underline">
            Facundo Paez
          </a>{" "}
          - 2023
        </h1>
      </footer>
      <BackToTopButton />
    </div>
  );
}

export default App;
