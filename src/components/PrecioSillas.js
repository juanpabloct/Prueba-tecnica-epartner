import { useState } from "react";

export default function PrecioSillas({
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
      <div>
        <img src={item} alt="" className="h-52 w-60" />
        <h1>{""}</h1>
      </div>
      {show && (
        <div className="bg-white">
          <h3 className="line-through decoration-double">{precio}</h3>
          <h3 className="text-lg font-medium">{precio}</h3>
        </div>
      )}
      <button className={styleButton}>{textButton}</button>
    </div>
  );
}
