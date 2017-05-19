import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/Link';

class BarraSuperior extends Component {

    render(){
    	var estilo = {
    		listStyleType: "none",
    	    margin: 0,
    		padding: 0,
    		overflow: "hidden",
    		backgroundColor: "#333"
    	};

        return (
        	<ul style={estilo}>
  			 <Boton nombre="Registrarse" />
  			 <Boton nombre="Iniciar sesión" />
			</ul>
        	);
    }
}

export default BarraSuperior;