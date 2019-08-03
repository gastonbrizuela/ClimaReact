import React from 'react'

function Clima({resultado}) {
    console.log(resultado)
    //extraer los valores"
    const{name, main}=resultado

    //restar grados kelvin
    const kelvin = 273.15

    if(!name) return null
    return (
        <div className= "card-panel white col s12">
            <div className= "black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">

                </p>
                <p>maxima temperatura:{main.temp_max-kelvin} </p>
            </div> 
        </div>
    )
}
export default Clima