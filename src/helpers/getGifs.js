export const getGifs = async( category ) => {

    //Se realiza la petición a la API de Giphy para obtener los gifs de la categoría seleccionada por el usuario
    const url = `https:api.giphy.com/v1/gifs/search?api_key=UIkUtHXV4PpLO4AeZbsquu5rcIKD75JP&q=${ category }&limit=10`;
    const resp = await fetch( url );
    // se obtiene la información de la respuesta en formato json
    const { data } = await resp.json();


    // se obtiene algunos datos de cada gif y se crea un nuevo arreglo con los datos obtenidos
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}

