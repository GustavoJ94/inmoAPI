import React, { Component } from 'react';
import { render } from 'react-dom';
import BarraSuperior from './componentes/barrasuperior/barrasuperior.jsx';

class Inicio extends Component {
    render(){
        return (
        	<div>
        		<BarraSuperior />
        		<h1>Hola mundo, mi nombre es ***** !</h1>
        	</div>
        	);
    }
}

render(<Inicio />, document.getElementById('contenedor'));