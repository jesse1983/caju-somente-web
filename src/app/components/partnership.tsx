import Image from "next/image";

export default function Parnership() {
  return <div className="shadow-[0_0_100px_0_rgba(42,77,208,0.2)]">
    <div className="container sm:pt-12 pt-5">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:h-72 px-14">
        <div className="flex md:text-left text-center text-black flex-col xl:pl-20">
          <div className="xl:text-[24px] md:block hidden text-[16px] font-bold">Já pensou em</div>
          <div className="xl:text-[24px] md:block hidden text-[16px] font-bold">cuidar da sua saúde</div>
          <div className="xl:text-[24px] md:block hidden text-[16px] font-bold">mental com o</div>
          <div className="xl:text-[24px] md:block hidden text-[16px] font-bold text-sky-700">menor custo <span className="text-black">do</span></div>
          <div className="xl:text-[24px] md:block hidden text-[16px] font-bold">mercado?</div>
          {/* mobile */}
          <div className="md:hidden text-[20px] font-bold">Já pensou em</div>
          <div className="md:hidden text-[20px] font-bold">cuidar da sua</div>
          <div className="md:hidden text-[20px] font-bold">saúde mental com </div>
          <div className="md:hidden text-[20px] font-bold text-sky-700">o menor custo <span className="text-black">do</span></div>
          <div className="md:hidden text-[20px] font-bold">mercado?</div>
        </div>
        <div className="flex md:h-72 md:w-72">
          <Image
            src="./partnership.svg"
            width={360}
            height={360}
            alt="girl_with_heart"
            className="lg:w-[21,5rem] lg:h-[21,5rem] bg-no-repeat absolute sm:block hidden"
            />
        </div>
        <div className="flex md:text-right text-center text-black flex-col xl:pr-20 md:mb-0 mb-8">
          <div className="xl:text-[24px] md:block hidden text-[16px] font-bold">Nós da <span className="text-sky-700">Somente</span></div>
          <div className="xl:text-[24px] md:block hidden text-[16px] font-bold">em parceira</div>
          <div className="xl:text-[24px] md:block hidden text-[16px] font-bold">com a <span className="text-crimson-300">Caju</span></div>
          <div className="xl:text-[24px] md:block hidden text-[16px] font-bold">desenvolvemos</div>
          <div className="xl:text-[24px] md:block hidden text-[16px] font-bold">o seu <span className="text-sky-700">pacote de</span></div>
          <div className="xl:text-[24px] md:block hidden text-[16px] font-bold text-sky-700">Saúde Mental!</div>
          {/* mobile */}
          <br className="md:hidden" />
          <br className="md:hidden" />
          <div className="md:hidden text-[20px] font-bold">Nós da</div>
          <div className="md:hidden text-[20px] font-bold text-sky-700">Somente <span className="text-black">em</span></div>
          <div className="md:hidden text-[20px] font-bold">parceria com a</div>
          <div className="md:hidden text-[20px] font-bold text-crimson-300">Caju</div>
          <div className="md:hidden text-[20px] font-bold">desenvolvemos</div>
          <div className="md:hidden text-[20px] font-bold">o seu <span className="text-sky-700">pacote de</span></div>
          <div className="md:hidden text-[20px] font-bold text-sky-700">Saúde Mental!</div>
        </div>

      </div>
    </div>
  </div>
}
