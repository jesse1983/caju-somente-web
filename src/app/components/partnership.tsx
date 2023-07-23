import Image from "next/image";

export default function Parnership() {
  return <div className="shadow-[0_0_100px_0_rgba(42,77,208,0.2)]">
    <div className="container sm:pt-12 pt-5 m-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:h-72 px-14">
        <div className="flex md:text-left text-center text-black flex-col xl:w-80 xl:pl-20">
          <p className="text-[1.5rem] w-full font-bold">Já pensou em cuidar da sua saúde mental com o
          <span className="text-sky-700"> menor custo </span> do mercado? </p>
          {/* mobile */}
          {/* <p className="text-[2rem] md:hidden font-bold">Já pensou em cuidar da sua saúde mental com o
          <span className="text-sky-700"> menor custo </span> do mercado? </p> */}
        </div>
        <div className="flex md:h-64 md:w-64 justify-center">
          <Image
            src="./partnership.svg"
            width={360}
            height={360}
            alt="girl_with_heart"
            className="md:w-[21.5rem] md:h-[21.5rem] md:block bg-no-repeat absolute hidden"
            />
        </div>
        <br className="sm:hidden" />
        <br className="sm:hidden" />
        <div className="flex md:text-right text-center text-black flex-col xl:w-80 xl:pr-20 md:mb-0 mb-8">
          <p className="text-[1.5rem] font-bold">Nós da <span className="text-sky-700">Somente</span> em parceira com a <span className="text-crimson-300">Caju</span> desenvolvemos o seu <span className="text-sky-700">pacote de</span>
          <span className="text-sky-700"> Saúde Mental!</span></p>
        </div>

      </div>
    </div>
  </div>
}
