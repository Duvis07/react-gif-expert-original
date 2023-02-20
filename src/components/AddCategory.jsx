import { useState } from "react";

//Use state to manage the input value
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  //se destructura el evento para obtener el valor del input y se actualiza el estado inputValue
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  //se evita el comportamiento por defecto de refresh  del formulario y se valida que el input no este vacio
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // setCategories( categories => [ inputValue, ...categories ]);

    ///se limpia el input y se ejecuta la funcion onNewCategory
    setInputValue("");
    //  se emite el evento onNewCategory con el valor del input
    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
