export default function Main() {
  return (
    <>
      <section className="relative">
        <img
          alt="imagen"
          src="https://espaciohogar.com/wp-content/uploads/2020/12/silla-ruedas-600x393.jpg"
          style={{ height: "70vh" }}
          className="w-full"
        />
        <div className="w-40 absolute ml-28 top-1/4">
          <span className=" text-center  capitalize text-5xl text-white">
            <span className="text-lime-300 inline-block ">Más</span> De 800 Mil
            Familias Habilitadas
          </span>
          <button className="bg-blue-500 rounded-sm mt-2 text-white h-10 w-52 text-lg">
            Ver Productos
          </button>
        </div>
      </section>
    </>
  );
}
