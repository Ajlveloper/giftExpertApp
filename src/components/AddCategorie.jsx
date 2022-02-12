import React, { useState } from "react";
import PropTypes from 'prop-types'

const AddCategorie = ({ setCategories }) => {
    //Si tengo mi estado sin valor, entonces esta undefined y por consecuencia el value de mi input tambien por cual me parece un warning al escribir:
    //Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.
    //Esto se soluciona colocando un string vacío
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmitCategorie = (e) => {
    e.preventDefault();
    
    //VALIDO PARA NO MANDAR UN ELEMENTO VACÍO.
   inputValue.trim().length > 2 && setCategories(categorie => [inputValue, ...categorie]);//esto es mas optimo porque no tengo necesidad de pasar el estado en sí, sino que ya con el argumento del cb hago referencia del mismo, este tiene mas coherencia usandolo como prop.
    setInputValue('')
  };
  return (
    <>
      <form onSubmit={handleSubmitCategorie}>
        <input
          type="text"
          value={inputValue} //Si no coloco el onChange, no me va a dejar escribir y sale un warning
          onChange={handleInputChange}
        />
      </form>
    </>
  );
};

AddCategorie.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategorie;
