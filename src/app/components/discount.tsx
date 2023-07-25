export default function Discount() {
  return <div className="mb-10">
    <div className="container m-auto bg-crimson-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 h-96">
        <div className="xl:ml-3 h-full w-full bg-contain bg-center bg-no-repeat hidden sm:block" style={{ backgroundImage: 'url(./discount.png' }}></div>

        <div className="flex justify-center text-center text-white h-full flex-col">
          <div>
          <div className="text-3xl font-bold">Como funciona?</div>
          <div className="text-[21px]/5 text-rose-300">2 consultas com psicólogo +</div>
          <div className="text-[21px]/5 text-rose-300">1 consulta com psiquiatra ou</div>
          <div className="text-[20px]/5 text-rose-300">3 consultas com psicólogo</div>
          <br />
          <div className="text-3xl font-bold">Tudo isso, por quanto?</div>
          <div className="text-xl text-orange-300"><span className="sm:text-5xl text-4xl font-bold xl:ml-10 md:ml-10 mr-6 text-center">R$129,90</span></div>
          <div className="text-sm text-stone-300">*Desconto especial Caju Feirinha</div>
          </div>
        </div>

      </div>
    </div>
  </div>
}
