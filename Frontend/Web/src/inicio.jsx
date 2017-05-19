import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class Inicio extends Component {
    render(){
    	const papelEstilo = {
			  height: 100,
			  width: 100,
			  margin: "auto",
			  textAlign: 'center',
			};

        return (
        	<MuiThemeProvider>
	        	<div>
	        		<AppBar title="Inmo" />
	        		<Paper style={papelEstilo} zDepth={2} circle={true}>
	        			<h3>Hola mundo</h3>
	        		</Paper>
	        		<RaisedButton label="Un boton" primary={true} />
	        	</div>
        	</MuiThemeProvider>
        	);
    }
}

render(<Inicio />, document.getElementById('contenedor'));