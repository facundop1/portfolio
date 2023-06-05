import React from "react";
import ProgressBar from "./ProgressBar";

export const ContentMain = () => {
  const progressHTML = 90;
  const progressCSS = 80;
  const progressJavaScript = 70;
  const progressJava = 30;
  const progressMySQL = 30;
  const progressReact = 25;
  const progressTailwind = 25;

  return (
    <div className="md:flex md:flex-wrap md:justify-between">
      <div className="md:flex md:flex-col md:w-[14rem] lg:w-[16rem] xl:w-[19rem] 2xl:w-[22rem]">
        <div className="bg-cards flex flex-col sm:gap-4 sm:p-4 sm:rounded md:max-w-xs lg:max-w-sm xl:max-w-md">
          <h1 className="font-semibold text-lg">Skills</h1>

          <div className="w-full">
            <span className="font-semibold">HTML</span>
            <ProgressBar progress={progressHTML} />
          </div>

          <div className="w-full">
            <span className="font-semibold">CSS</span>
            <ProgressBar progress={progressCSS} />
          </div>

          <div className="w-full">
            <span className="font-semibold">JavaScript</span>
            <ProgressBar progress={progressJavaScript} />
          </div>

          <div className="w-full">
            <span className="font-semibold">Java</span>
            <ProgressBar progress={progressJava} />
          </div>

          <div className="w-full">
            <span className="font-semibold">MySQL</span>
            <ProgressBar progress={progressMySQL} />
          </div>

          <div className="w-full">
            <span className="font-semibold">React</span>
            <ProgressBar progress={progressReact} />
          </div>

          <div className="w-full">
            <span className="font-semibold">Tailwindcss</span>
            <ProgressBar progress={progressTailwind} />
          </div>
        </div>

        <br />

        <div className="bg-cards sm:p-4 flex sm:flex-col sm:gap-4 sm:rounded md:max-w-xs lg:max-w-sm xl:max-w-md">
          <h1 className="font-semibold text-lg">Hobbies</h1>
          <div>
            <div className="bg-hobbies-gaming bg-contain bg-no-repeat sm:w-full sm:h-44" />
            <h1 className="font-semibold">Gaming</h1>
          </div>

          <div>
            <div className="bg-hobbies-music bg-contain bg-no-repeat sm:w-full sm:h-44" />
            <h1 className="font-semibold">Musica</h1>
          </div>

          <div>
            <div className="bg-hobbies-lenguages bg-contain bg-no-repeat sm:w-full sm:h-44" />
            <h1 className="font-semibold">Idiomas</h1>
          </div>
        </div>
      </div>

      <br />

      <div className="md:flex md:flex-col md:w-4/6">
        <div className="bg-cards flex flex-col sm:p-4 sm:gap-4 sm:rounded md:max-w-full">
          <h1 className="font-semibold text-lg">Formacion academica</h1>

          <div className="flex sm:flex-col gap-1 xl:flex-row">
            <div className="bg-formacion-argprograma bg-contain bg-no-repeat sm:w-full sm:h-44 2xl:w-96" />
            <div className="flex flex-col gap-1">
              <p className="font-medium text-stone-500">Feb. 2023 - Actual</p>
              <span className="font-semibold">Argentina Programa 4.0</span>
              <p className="font-medium">
                Curso de introduccion a la programacion con Gobstones,
                JavaScript y Ruby.
              </p>
            </div>
          </div>

          <div className="flex sm:flex-col gap-1 xl:flex-row">
            <div className="bg-formacion-one bg-contain bg-no-repeat sm:w-full sm:h-44 xl:w-[68%] 2xl:w-96" />
            <div className="flex sm:flex-col gap-1 ">
              <p className="font-medium text-stone-500">Feb. 2022 - En. 2023</p>
              <span className="font-semibold">ONE - Oracle Next Education</span>
              <p className="font-medium">
                Cursos de HTML, CCS, JavaScript, Java y MySQL.
              </p>
            </div>
          </div>
        </div>

        <br />

        <div className="bg-cards sm:p-4 sm:rounded md:max-w-full">
          <h1 className="font-semibold text-lg">Experiencia profesional</h1>
        </div>
      </div>
    </div>
  );
};
