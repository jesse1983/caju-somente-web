import Image from "next/image";

export default function Parnership() {
  return <div
    className="pt-20 lg:pt-5 pb-20 bg-repeat-x lg:bg-[center_top_306px]"
    style={{ backgroundImage: 'url(./partnership-bg.png)' }}>
    <div className="container px-12 mx-auto">
      <div className="lg:flex flex-row justify-between items-center">
        <div className="lg:text-left text-center text-black lg:w-1/4 xl:w-1/5 mb-5">
          <p className="text-[1.5rem] w-full font-bold">Já pensou em cuidar da sua saúde mental com o
          <span className="text-crimson-300"> menor custo </span> do mercado? </p>
        </div>
        <Image
            src="./partnership.svg"
            width={360}
            height={360}
            alt="girl_with_heart"
            className="lg:block bg-no-repeat hidden mx-auto h-full"
            />
        <div className="lg:text-right text-center text-black lg:w-1/4 xl:w-1/5">
          <p className="text-[1.5rem] font-bold">Nós da <span className="text-crimson-300">Somente</span> em parceira com a <span className="text-crimson-300">Caju</span> desenvolvemos o seu <span className="text-crimson-300">pacote de</span>
          <span className="text-crimson-300"> Saúde Mental!</span></p>
        </div>
      </div>
    </div>
  </div>
}
