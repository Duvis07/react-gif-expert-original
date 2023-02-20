import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el kook useFetchGifs", () => {
  test("debe de regresar el estado inicial", () => {
    //Render hook es una funcion que nos permite renderizar un hook regresa varios valores
    // se desestructura lo que tiene el hook y se obtiene el result
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe de retornar un arreglo de imagenes y isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    // waitFor es una funcion que nos permite esperar a que se ejecute una accion
    await waitFor(() =>
    //se esta esperando a que el arreglo de imagenes sea mayor a 0
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
