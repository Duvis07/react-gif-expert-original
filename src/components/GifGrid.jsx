import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  //se ejecuta el hook useFetchGifs y se obtiene el arreglo de imagenes y el estado de carga
  const { images, isLoading } = useFetchGifs(category);

  //se itera sobre el arreglo de imagenes y se renderiza un componente GifItem por cada elemento del arreglo
  //se pasa como props el id, el titulo y la url de cada imagen
  // si isLoading es true se muestra el mensaje "Cargando..."  && es un operador corto circuito
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
