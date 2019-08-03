import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Error from './components/Error'
import Clima from './components/Clima'

function App() {
  const[ciudad,guardarCiudad] = useState('')
  const[pais, guardarPais ]= useState('')
  const[error, guardarError] = useState(false)
  const[resultado,guardarResultado] = useState({})

  useEffect(()=>{
    //prevenir la ejecucion al principio
    if(ciudad===''||pais==='') return;

    const consultarApi = async()=>{
      const appid = '24cf80398f977e2d131ded262ed5e069'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`

      //consultar a la url 
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      guardarResultado(resultado)
      console.log("hola")

      
  }

    consultarApi();
  },[ciudad,pais]);

  const datosConsulta = datos =>{
    if(datos.ciudad ===''|| datos.pais===''){
      guardarError(true);
      return;
    }
    //ciudad y pais existen o esta cargado agregarlos al state
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }
  let componente;
  if(error){
    componente = <Error mensaje = "Faltan completar datos"></Error>
  }else{
    componente = <Clima resultado = {resultado}></Clima>;
  }
  return (
    <div className = "app">
      <Header titulo = "probando la app"/>
      <div className ="contenedor-form">
        <div className = "conteiner">
          <div className = "row">
            <div className = "col s12 m6">
              <Formulario 
              datosConsulta={datosConsulta}>
              </Formulario>
           </div>
           <div className = "col s12 m6">
              {componente}
           </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
