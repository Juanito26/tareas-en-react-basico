import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from './ComponenteA.class'

function ComponenteB({us}) {
  return (
    <div>
    <h2> Nombre: {us.Nombre} </h2> 
    <h3> Apellido: {us.Apellido}</h3>
    <h4> Emailq: {us.Email}</h4>  
    <h5>
     Conectadow: {us.Conectado ? 'Contacto en linea':'Contacto no Disponible'}
    </h5>
    </div>
  )
}

ComponenteB.propTypes = {
    us: PropTypes.instanceOf(Contacto)
}

export default ComponenteB
