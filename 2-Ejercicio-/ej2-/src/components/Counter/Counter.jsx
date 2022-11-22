
import { useState } from "react";

const Counter = ({max}) => {
  const [input, setinput] = useState()
  let increaseinput = () => setinput((input) => input+ 1)
  let decreaseinput = () => setinput(input - 1)

  if(input<=0){
     decreaseinput = () => setinput(0)
  }

  if(input>=max){
     increaseinput = () => setinput(max)
  }
  const manuallyUpdate = (event) => {
      let newvalue=parseInt(event.target.value)
      if(newvalue <= 0 || !newvalue){
          setinput(" ")
      }else if(newvalue >= parseInt(max)){
          setinput(max)
      }else{
          setinput(newvalue)
      }
  }

  return (
          <div>
            <h1>Number Counter</h1>
            <p className="instructions">
              <h2>Ejercicio 2</h2>
              Crea un componente Counter (funcional) que contenga: <br />
              - botón de decremento contador  <br />
              - botón de incremento <br /> <br />
              El componente mostrará un contador y podremos incrementarlo o decrementarlo en función de si pulsamos un botón u otro que al instanciarlo pueda: <br />
              - Que el contador pueda empezar desde un determinado número <br />
              - Que podamos decirle al componente si queremos que incremente de 2 en 2, 3 en 3, etc. 
              </p>
             <button onClick={decreaseinput}> - </button>
             <input  type="number" value={input} onChange={(e) => manuallyUpdate(e)} placeholder="Introduce un número > 0"/>
             <button onClick={increaseinput}> + </button>
          </div>
  )
}

export default Counter

