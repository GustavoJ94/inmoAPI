import React, { Component } from 'react';
import { render } from 'react-dom';

class Inicio extends Component {
    render(){
        return (<h1>Hola mundo, mi nombre es ***** !</h1>);
    }
}

render(<Inicio />, document.getElementById('contenedor'));