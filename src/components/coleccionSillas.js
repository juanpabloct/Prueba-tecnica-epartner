import { useEffect, useRef, useState } from "react";

export default function ColeccionSillas({
  text = "Silla de ruedas monotorizada gris metalizado abatible M2000",
  data,
  title,
  styleconter,
  precio,
  text_conter,
  styleButton = "bg-blue-500 w-52 rounded-md ",
  textButton = "Añadir Al carrito",
  style_textConter,
  Accion,
}) {
  return (
    <div className="mx-auto">
      <h1
        className={
          "text-center text-3xl font-bold capitalize " + style_textConter
        }
      >
        {text_conter}
      </h1>
      <div className=" flex flex-row w-full justify-center m-auto gap-3">
        {data.map((item, i) => {
          return (
            <Accion
              key={i}
              styleconter={styleconter}
              item={item}
              precio={precio}
              styleButton={styleButton}
              textButton={textButton}
            />
          );
        })}
      </div>
    </div>
  );
}
