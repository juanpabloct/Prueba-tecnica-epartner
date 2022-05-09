import styles from "../";

export default function Carrusel({ info }) {
  const { url, text } = info;
  return (
    <section className="flex w-full hover:text-blue-400 cursor-pointer">
      <div className="w-11/12 m-auto overflow-hidden">
        <ul
          className="flex p-0"
          style={{ animation: "cambio 2s infinitive alternate linear" }}
        >
          <li className="w-full list-none">
            <img src={url} alt="imagenes" className="w-full h-24" />
          </li>
        </ul>
        <span>{text}</span>
      </div>
    </section>
  );
}
