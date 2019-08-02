import React, {useState} from 'react';

function Formulario({datosConsulta}){

    //state del componente
    //busqueda es el state y guardar busqueda seria setState
    const [busqueda, guardarBusqueda] = useState({
        ciudad :'',
        pais: ''
    })

    const handleChange = e =>{
        //cambiar el state
        guardarBusqueda({
            //los tres puntos y el nombre del state guarda el estado anterior
            //y suma lo nuevo
            ...busqueda,
            [e.target.name]:e.target.value
        });
    }
    const consultarClima = e=>{
        e.preventDefault();
        //pasa hacia el componente princial la busqueda
        datosConsulta(busqueda)

    }
    
    return(
        <form
            onSubmit = {consultarClima}
        >
            <div className="input-field col s12">
                <input 
                    type="text"
                    name= "ciudad"
                    id ="ciudad"
                    onChange = {handleChange}/>
                <label htmlFor = "ciudad">ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select onChange = {handleChange} name ="pais">
                    <option value="">Selecciona un pais</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Peru</option>
                </select>
            </div>
            <div className = "input-field col s12">
                <input type="submit" className = "waves-effect waves-light btn-large btn-block green accent-4" value="buscar clima"/>
            </div>
        </form>
    )
}

export default Formulario;