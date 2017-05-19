import React, { Component } from 'react';

class Boton extends Component {

    render(){
    	var estilo = {
    		display: "block",
    	    color: "white",
    		textAlign: "center",
    		padding: "14px 16px",
    		textDecoration: "none"
    	};

        return (
  			 <li style={{float:"right"}}><a style={estilo}>{this.props.nombre}</a></li>
        	);
    }
}

export default Boton;