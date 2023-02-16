export const GifItem = ({ title, url, id }) => {
  //mostrar la informacion de cada gif en el DOM con un div y un parrafo con el titulo del gif
  //se reciben como props el titulo y la url de cada imagen del componente GifGrid
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
