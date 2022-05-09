import { useState } from "react";

export default function AñadirCarritoSillas({
  styleconter,
  item,
  precio,
  styleButton,
  textButton,
}) {
  const [show, setShow] = useState(false);
  return (
    <div
      className={styleconter}
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <div className="w-full">
        <img src={item} alt="" className="h-52 w-auto" />
        <h1>{""}</h1>
      </div>
      <div className="bg-white">
        <h3 className="line-through decoration-double">{precio}</h3>
        <h3>{precio}</h3>
      </div>
      {show && <button className={styleButton}>{textButton}</button>}
    </div>
  );
}
