import React, { useEffect, useState } from "react";

const Greeting = (props) => {
  const [name, setName] = useState(props.person.name);

  useEffect(() => {
    setTimeout(() => {
      setName("Alfonsina");
    }, 3000);
  }, []);
  return (
    <p className="instructions">
      <h2>Ejercicio 3</h2>
      Crea un componente Greeting (funcional) que contenga: <br />
      - Una etiqueta “p” que diga “Hola Euralio” <br /> <br />
      Ahora Euralio en vez de escribirlo a fuego, haz que venga como “props”
      desde el componente padre. <br /> <br />
      Por último, cuando se monte el componente Greeting y pasen 3 segundos el
      componente debe mostrar: “Hola Alfonsina” <br /> br
      <h3>¡Hola {name}!</h3>
    </p>
  );
};

export default Greeting;
