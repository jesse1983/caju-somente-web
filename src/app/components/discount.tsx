export default function Discount() {
  return <div className="m-10 pt-12">
    <div className="container m-auto bg-crimson-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 h-96">
        <div className="flex xl:ml-3 h-full w-full bg-contain bg-center bg-no-repeat hidden sm:block" style={{ backgroundImage: 'url(./discount.png' }}></div>

        <div className="flex space-y-2 space-x-5 xl:pr-10 xl:mr-5 text-white justify-center text-center flex-col">
          <div className="text-3xl font-bold xl:ml-10 md:ml-10 ml-0 text-center">Como funciona?</div>
          <div className="text-[21px]/5 text-rose-300 xl:ml-10 md:ml-10 ml-0 text-center">2 consultas com psicólogo +</div>
          <div className="text-[21px]/5 text-rose-300 xl:ml-10 md:ml-10 ml-0 text-center">1 consulta com psiquiatra ou</div>
          <div className="text-[20px]/5 text-rose-300 xl:ml-10 md:ml-10 ml-0 text-center">3 consultas com psicólogo</div>
          <br />
          <div className="sm:space-x-5">
          <div className="text-3xl font-bold xl:ml-10 md:ml-10 ml-0 text-center">Tudo isso, por quanto?</div>
          <div className="text-xl text-orange-300 xl:text-center text-center"><span className="sm:text-5xl text-4xl font-bold xl:ml-10 md:ml-10 mr-6 text-center">R$129,90</span></div>
          <div className="text-sm text-stone-300 xl:text-center text-center ">*Desconto especial Caju Feirinha</div>
          </div>
        </div>

      </div>
    </div>
  </div>
}
