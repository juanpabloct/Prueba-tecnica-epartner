import { useEffect, useRef, useState } from "react";
import AñadirCarritoSillas from "./components/AñadirCarritoSillas";

import Button from "./components/button";
import Carrusel from "./components/carrusel";
import ColeccionSillas from "./components/coleccionSillas";
import ImagesVerProductos from "./components/Images.verProductos";
import Main from "./components/main";
import PrecioSillas from "./components/PrecioSillas";
import logoBusqueda from "./img/logoBusqueda.png";
import { Icon } from "@iconify/react";
import Footer from "./components/Footer";
import urlImages from "./components/UrlImages";

export default function App() {
  const SillasDeRuedas = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcUMXofsLWii5BWaYw5d0nyROBHK-0gZDsA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMhiUPIxceay3dBQMVJ-d-6OqWZ13ceJnPg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcUMXofsLWii5BWaYw5d0nyROBHK-0gZDsA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_0W6XOFeUxZKPYCgGCU6h3eI2d_muZjYg5g&usqp=CAU",
  ];
  return (
    <>
      <header>
        <nav className="flex items-center">
          <img
            className="w-14 h-14"
            src="https://www.catalogodelasalud.com/backend/imagenes/5447508/logo-impormedical.jpg"
            alt="Logo"
          />
          <div className="flex w-1/2 relative h-10 items-center grow">
            <input
              type={"text"}
              className="border-2 border-black w-full h-full absolute"
              placeholder="¿Que estas buscando escrible aqui?"
            />
            <img
              src={logoBusqueda}
              alt={"busqueda"}
              className=" h-5/6 z-10 right-1 absolute hover:cursor-pointer"
            />
          </div>
          <a href="#" className="text-blue-500">
            Mis pedidos
          </a>
          <div className="ml-5 relative grow text-center">
            <h2>Hola Aliad@</h2>
            <h2
              className="underline text-lg text-center  relative text-blue-500"
              style={{ top: "-7px" }}
            >
              Ingresa
            </h2>
          </div>
          <div className="flex items-center grow">
            <img
              src="https://icongr.am/fontawesome/cart-plus.svg?size=40&color=currentColor"
              alt=""
            />
            <h2>Comprar</h2>
          </div>
        </nav>
        <div className="flex">
          <img
            style={{ width: "2%" }}
            src="https://icongr.am/fontawesome/bars.svg?size=30&color=currentColor"
            alt="icon_bar"
          />
          <Icon icon="bi:heart-pulse-fill" width={"2%"} />
          <Icon icon="ph:face-mask" width={"2%"} />
        </div>
      </header>
      <main>
        {<Main />}
        <section className="flex w-full">
          {urlImages.map((item, i) => {
            return <Carrusel info={item} key={i} />;
          })}
        </section>
        <section className="mt-6">
          <ColeccionSillas
            data={SillasDeRuedas}
            styleconter={"bg-white"}
            text_conter={"Nueva Coleccion"}
            style_textConter={"text-blue-500"}
            styleButton={"bg-blue-500 w-full rounded-md "}
            Accion={AñadirCarritoSillas}
          />
          ;
        </section>
        <section className="grid grid-cols-4 grid-rows-1 gap-3 text-2xl text-white w-10/12 m-auto">
          <div
            className="bg-no-repeat col-span-2 bg-cover h-52 text-center flex flex-col justify-center bg-blend-darken "
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRVfX_tP_MTgjXXd9tW4bDdLfFuScqw5Wog&usqp=CAU)",
              backgroundColor: "rgba(0,0, 0,0.7)",
            }}
          >
            ¿Por que Elegirnos?
            <Button text={"Conoce mas de nosotros"} size={"h-1/6 w-1/2"} />
          </div>
          <div
            className="text-center flex flex-col justify-center bg-blend-darken"
            style={{
              backgroundImage:
                "url(https://cdn.shopify.com/s/files/1/0043/6384/5720/articles/tienda-abarrotes-001_1024x1024.jpg?v=1571777316)",
              backgroundColor: "rgba(0,0, 0,0.7)",
            }}
          >
            Tienda Surtida
          </div>
          <div
            className="row-span-2 text-center bg-cover bg-no-repeat flex flex-col justify-center bg-blend-darken"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rdic0rIp3ttRu5qMSp1iBoj_SVn5o__GcQ&usqp=CAU)",
              backgroundColor: "rgba(0,0, 0,0.7)",
            }}
          >
            Gente Informada
          </div>
          <div
            className=" bg-no-repeat bg-cover text-center flex flex-col justify-center bg-blend-darken"
            style={{
              backgroundImage:
                "url(https://blog.contpaqi.com/hubfs/17%20copia.jpg)",
              backgroundColor: "rgba(0,0, 0,0.7)",
            }}
          >
            Usuario interesado
          </div>
          <div
            className="col-span-2 bg-cover bg-no-repeat h-52 text-center flex flex-col justify-center bg-blend-darken"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJq5H65JlHZPK17AGc8P3wkFmZU-A1CUzOg&usqp=CAU)",
              backgroundColor: "rgba(0,0, 0,0.7)",
            }}
          >
            Servicio Integral
          </div>
        </section>
        <section className="relative h-96 mb-4">
          <div
            className="bg-no-repeat bg-cover bg-center w-full h-52  mt-10 bg-blend-darken"
            style={{
              backgroundImage:
                "url(https://www.ortopedicoswyw.com/file/Producto/3606_PHOTO_2020_09_01_16_26_44.jpg)",
              backgroundColor: "rgba(0,0, 0,0.7)",
            }}
          >
            <ColeccionSillas
              data={SillasDeRuedas}
              styleconter={"bg-white"}
              text_conter={"Nueva Coleccion"}
              style_textConter={"text-blue-500"}
              precio={"$1,000000"}
              Accion={PrecioSillas}
              styleButton={"bg-blue-500 w-full rounded-md"}
            />
          </div>
        </section>
        <section className="relative flex w-10/12 mx-auto gap-4">
          <ImagesVerProductos
            url={{
              backgroundImage:
                "url(https://www.ucinmedica.com/wp-content/uploads/2021/04/terapia-respiratoria.jpg)",
              backgroundColor: "rgba(0,0, 0,0.4)",
            }}
            text={"Empresas En Crecimiento"}
          />
          <ImagesVerProductos
            url={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfslshfMF0w3Z9Y1o05SxWcIgNCPMvijWFeQ&usqp=CAU)",
              backgroundColor: "rgba(0,0, 0,0.4)",
            }}
            text={"Complemento linea de oximetria"}
          />
        </section>
        <section className="mt-10">
          <ColeccionSillas
            data={SillasDeRuedas}
            styleconter={"bg-white"}
            text_conter={"Terapia respiratoria"}
            style_textConter={"text-blue-500"}
            Accion={AñadirCarritoSillas}
            styleButton={"w-full bg-blue-500 rounded-md"}
          />
        </section>
        <Footer />
      </main>
    </>
  );
}
