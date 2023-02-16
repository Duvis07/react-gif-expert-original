import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  //Agregar una nueva categoria a la lista de categorias
  const onAddCategory = (newCategory) => {
    //Validar que la categoria no exista en la lista de categorias para evitar duplicados en la lista de categorias
    if (categories.includes(newCategory)) return;
    // //Agregar la nueva categoria a la lista de categorias y actualizar el estado
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
