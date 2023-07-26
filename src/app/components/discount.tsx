export default function Discount() {
  return <div className="mb-10">
    <div className="container m-auto bg-crimson-300 pt-10 sm:p-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 h-96">
        <div className="xl:ml-3 h-full w-full bg-contain bg-center bg-no-repeat hidden sm:block" style={{ backgroundImage: 'url(./discount.png' }}></div>

        <div className="flex justify-center text-center text-white h-full flex-col">
          <div>
          <p className="text-3xl font-bold">SEU PACOTE DE <br />SAÚDE MENTAL POR</p>
          <br />
          <div className="text-xl text-orange-300"><span className="sm:text-5xl text-4xl font-bold xl:ml-10 md:ml-10 mr-6 text-center">R$129,90</span></div>
          <div className="text-sm text-stone-300">*Desconto especial Caju Feirinha</div>
          </div>
        </div>
        <div className="h-48 w-full bg-contain bg-center bg-no-repeat sm:hidden bg-crimson-300" style={{ backgroundImage: 'url(./discount.png' }}></div>
      </div>
    </div>
  </div>
}
