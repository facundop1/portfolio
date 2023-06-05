import React from "react";

export const Proyects = () => {
  return (
    <div>
      <div className="bg-cards flex flex-col gap-4 sm:p-4 sm:rounded">
        <h1 className="font-semibold text-lg">Proyectos</h1>
        <div className="flex flex-wrap gap-2">
          <button className="rounded-full sm:py-1 sm:px-3 border font-medium border-black hover:bg-primary hover:text-white hover:border-none hover:transition hover:duration-300">
            Todos
          </button>
          <button className="rounded-full sm:py-1 sm:px-3 border font-medium border-black hover:bg-primary hover:text-white hover:border-none hover:transition hover:duration-300">
            HTML
          </button>
          <button className="rounded-full sm:py-1 sm:px-3 border font-medium border-black hover:bg-primary hover:text-white hover:border-none hover:transition hover:duration-300">
            CSS
          </button>
          <button className="rounded-full sm:py-1 sm:px-3 border font-medium border-black hover:bg-primary hover:text-white hover:border-none hover:transition hover:duration-300">
            React
          </button>
          <button className="rounded-full sm:py-1 sm:px-2 border font-medium border-black hover:bg-primary hover:text-white hover:border-none hover:transition hover:duration-300">
            Tailwindcss
          </button>
          <button className="rounded-full sm:py-1 sm:px-2 border font-medium border-black hover:bg-primary hover:text-white hover:border-none hover:transition hover:duration-300">
            Responsive
          </button>
          <button className="rounded-full sm:py-1 sm:px-4 border font-medium border-black hover:bg-primary hover:text-white hover:border-none hover:transition hover:duration-300">
            Java
          </button>
        </div>
      </div>

      <br />

      <div className="flex sm:flex-col sm:gap-4 md:flex-row md:flex-wrap md:justify-between md:gap-11">
        <div className="bg-cards flex flex-col sm:p-4 sm:rounded sm:gap-2 md:max-w-xs">
          <div className="bg-proyects-encryptor bg-contain bg-no-repeat sm:w-full sm:h-44" />
          <p className="font-medium text-stone-500">#CSS #HTML #JavaScript</p>
          <span className="font-semibold">Encriptador de Texto</span>
          <p className="font-medium">
            En este projecto, trabaje con HTML, CSS y JS para crear una pagina
            responsiva. Esta pagina es similar a la de un challenge. El diseño
            es de https://www.aluracursos.com/
          </p>
          <div className="flex sm:gap-3">
            <a href="https://facundop1.github.io/Encriptador-de-texto/">
              <button className="rounded-full sm:py-1 sm:px-5 border border-black hover:bg-primary hover:text-white hover:border-none hover:transition hover:duration-300">
                Demo
              </button>
            </a>
            <a href="https://github.com/facundop1/Encriptador-de-texto">
              <button className="rounded-full sm:py-1 sm:px-5 border border-black hover:bg-primary hover:text-white hover:border-none hover:transition hover:duration-300">
                Code
              </button>
            </a>
          </div>
        </div>

        <div className="bg-cards flex flex-col sm:p-4 sm:rounded sm:gap-2 md:max-w-xs">
          <div className="bg-proyects-hangman bg-contain bg-no-repeat sm:w-full sm:h-44" />
          <p className="font-medium text-stone-500">#CSS #HTML #JavaScript</p>
          <span className="font-semibold">Juego del ahorcado</span>
          <p className="font-medium">
            En este projecto, trabaje con HTML, CSS y JS para crear una pagina
            responsiva. Esta pagina es similar a la de un challenge. El diseño
            es de https://www.aluracursos.com/
          </p>
          <div className="flex sm:gap-3">
            <a href="https://facundop1.github.io/Juego-del-ahorcado/">
              <button className="rounded-full sm:py-1 sm:px-5 border border-black hover:bg-primary hover:text-white hover:border-none hover:transition hover:duration-300">
                Demo
              </button>
            </a>
            <a href="https://github.com/facundop1/Juego-del-ahorcado">
              <button className="rounded-full sm:py-1 sm:px-5 border border-black hover:bg-primary hover:text-white hover:border-none hover:transition hover:duration-300">
                Code
              </button>
            </a>
          </div>
        </div>

        <div className="bg-cards flex flex-col sm:p-4 sm:gap-2 sm:rounded md:max-w-xs">
          <div className="bg-proyects-converter bg-contain bg-no-repeat sm:w-full sm:h-44" />
          <p className="font-medium text-stone-500">#Java</p>
          <span className="font-semibold">
            Conversor de monedas y temperatura
          </span>
          <p className="font-medium">
            En este proyecto, trabaje con JAVA. Para crear una aplicacion. Esta
            aplicacion es similar a la de un challlenge. El diseño es de
            https://www.aluracursos.com/
          </p>
          <a href="https://github.com/facundop1/conversor">
            <button className="rounded-full sm:py-1 sm:px-5 border border-black hover:bg-primary hover:text-white hover:border-none hover:transition hover:duration-300">
              Code
            </button>
          </a>
        </div>

        <div className="bg-cards flex flex-col sm:gap-2 sm:p-4 sm:rounded md:max-w-xs">
          <div className="bg-proyects-hotel bg-contain bg-no-repeat sm:w-full sm:h-44" />
          <p className="font-medium text-stone-500">#Java #MySQL</p>
          <span className="font-semibold">Hotel Alura</span>
          <p className="font-medium">
            En este proyecto, trabaje con JAVA. Para crear una aplicacion. Esta
            aplicacion es similar a la de un challlenge. El diseño es de
            https://www.aluracursos.com/
          </p>
          <a href="https://github.com/facundop1/alura-hotel" className="">
            <button className="rounded-full sm:py-1 sm:px-5 border border-black hover:bg-primary hover:text-white hover:border-none hover:transition hover:duration-300">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
