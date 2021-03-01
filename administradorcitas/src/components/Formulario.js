import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4'


const Formulario = ({crearCita}) => {

    // Crear State de Citas

    const [cita, actualizarCita] = useState ({
        mascota: '',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    const [error, actualizarError ] = useState(false);

    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
        
    }

    //Extraer valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    const submitCita = e => {
        e.preventDefault();
        
        //Validar
        if (mascota.trim() === '' || propietario.trim() ==='' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true);
            return;
        }
        //Eliminar mensaje previo
        actualizarError(false);


        console.log(cita);
        //Asignar un ID
        cita.id=uuid();

        // Crear la cita - colocar en el state principal
        crearCita(cita);
        
        //Reiniciar el formulario
        actualizarCita({
            mascota: '',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })


    }

        return (
            <Fragment>
                <h2>Crear Cita</h2>

             { error ? <p className="alerta-error">Todos los campos son obligatorios</p> 
                : null }
                
                <form
                    onSubmit={submitCita}
                >
                    <label>Nombre Mascota</label>
                    <input 
                        type="text"
                        name="mascota"
                        className="u-full-width"
                        placeholder="Nombre Mascota"
                        onChange={actualizarState}
                        value={mascota}
                    />
                    <label>Nombre del Dueño</label>
                    <input 
                        type="text"
                        name="propietario"
                        className="u-full-width"
                        placeholder="Nombre del dueño"
                        onChange={actualizarState}
                        value={propietario}
                    />
                     <label>Fecha</label>
                    <input 
                        type="date"
                        name="fecha"
                        className="u-full-width"
                        onChange={actualizarState}
                        value={fecha}
                    />
                     <label>Hora</label>
                    <input 
                        type="time"
                        name="hora"
                        className="u-full-width"
                        onChange={actualizarState}
                        value={hora}
                    />
                    <label>Sintomas</label>
                    <textarea 
                        type="text"
                        name="sintomas"
                        className="u-full-width"
                        onChange={actualizarState}
                        value={sintomas}
                        
                    ></textarea>
                    <button
                        type="submit"
                        className="u-full-width button-primary"
                    >Agregar CitaSintomas</button>
                </form>



            </Fragment>
            

        )


};


export default Formulario;