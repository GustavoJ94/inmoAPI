import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class Inicio extends Component {
    render(){
        return (
        	<MuiThemeProvider>
	        	<div>
	        		<AppBar title="Inmo" />
	        		<RaisedButton label="Hola" primary={true}/>
	        	</div>
        	</MuiThemeProvider>
        	);
    }
}

render(<Inicio />, document.getElementById('contenedor'));