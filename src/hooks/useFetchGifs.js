import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

// Un custom hook es una función que se encarga de manejar el estado de un componente solo devuelve algo
//El hook dispara la renderización del componente  y obtiene la información de la API de Giphy imagenes
export const useFetchGifs = ( category ) => {
 // se crea una variable de estado para almacenar el arreglo de imagenes obtenido de la API
    const [images, setImages] = useState([]);
    // se crea una variable de estado para indicar si se están cargando los datos de la API
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        // se cambia el estado de la variable images con el arreglo de imagenes obtenido de la API
        setImages(newImages);
        // se cambia el estado de la variable isLoading a false para indicar que ya se obtuvieron los datos de la API
        setIsLoading(false);
    }
    
    useEffect( () => {
        getImages();
    }, []);



    return {
        images,
        isLoading
    }

}
