import Button from "./button";

export default function ImagesVerProductos({ url, text }) {
  return (
    <div
      className="bg-cover w-1/2 h-80 flex-col flex bg-blend-darken rounded-md"
      style={url}
    >
      <h1 className="text-white text-3xl font-semibold mt-44 w-1/2 ml-12 relative ">
        {text}
      </h1>
      <Button text={"Ver Productos"} size={"h-10 w-1/2 px-3"} />
    </div>
  );
}
