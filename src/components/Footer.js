import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer
      className="flex flex-row text-zinc-400 mt-10"
      style={{ backgroundColor: "#212121" }}
    >
      <div className="w-1/2">
        <h1 className=" text-xl text-center " style={{ color: "#777c14" }}>
          Sobre Nosotros
        </h1>
        <ol className=" ml-4 md:ml-7 lg:ml-10 xl:ml-16">
          <li>Quienes Somos</li>
          <li>Nuestra Historia </li>
          <li>Nuestra Información</li>
        </ol>
      </div>
      <div className="w-1/2">
        <h1 className=" text-xl text-center" style={{ color: "#777c14" }}>
          Categorias Destacadas
        </h1>
        <ol className=" ml-4 md:ml-7 lg:ml-10 xl:ml-16">
          <li>Profesionales de la salud</li>
          <li>Proteccion e higiene </li>
          <li>Control y prevencion</li>
          <li>Movilidad</li>
          <li>Independencia y cuidado en el hogar</li>
          <li>Terapia respiratoria</li>
          <li>Confort</li>
        </ol>
      </div>
      <div className="w-1/2">
        <h1 className="text-center" style={{ color: "#777c14" }}>
          Servicio al Cliente
        </h1>
        <ol className=" ml-4 md:ml-7 lg:ml-10 xl:ml-16">
          <li>Politica de entregas</li>
          <li>Politica de devoluciones</li>
          <li>Politica de garantías</li>
          <li>Politica de cancelacíon</li>
          <li>Whatsapp 123 123 3434</li>
          <li>PBX 01 8000 123 345</li>
          <li>e-MAIL: info@impormedical.com</li>
        </ol>
      </div>
      <div className="grow w-3/5 flex flex-col">
        <h1 className="text-xl text-center w-full" style={{ color: "#777c14" }}>
          Suscribase A Nuestro Newsletter
        </h1>
        <input className="rounded-sm w-3/4" />
        <label className="text-sm text-zinc-600">
          <input type={"checkbox"} />
          Aceptación de terminos y condiciones
        </label>
        <div className="flex mt-6">
          <Icon icon="arcticons:mercado-pago" width={"50%"} />
          <Icon icon="cib:american-express" width={"50%"} />
          <Icon icon="logos:mastercard" width={"50%"} />
          <Icon icon="logos:visa" width={"50%"} />
        </div>
      </div>
    </footer>
  );
}
