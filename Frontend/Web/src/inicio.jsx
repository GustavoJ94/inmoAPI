import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, IndexLink, hashHistory, Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
///
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
///
import Barra from './componentes/barra.jsx';

injectTapEventPlugin();
class Inicio extends Component {
    render(){
    	const items = [
  							<MenuItem key={1} value={1} primaryText="Terreno" />,
				        	<MenuItem key={2} value={2} primaryText="Local" />,
				        	<MenuItem key={3} value={3} primaryText="Apartamento" />,
				          	<MenuItem key={4} value={4} primaryText="Casa" />];

        return (
        	<MuiThemeProvider>
        		<div>
        			<Barra/>
        			<img src="img/logo-g.png" height="200" width="200" style={{"margin":"auto", "display":"block"}}/>
        			<Divider/>
        			<div>
        				<h2> Estoy buscando </h2>
        				<SelectField floatingLabelText="Tipo de inmueble" value={2}>
        					{items}
				        </SelectField>
        			</div>
        		</div>
        	</MuiThemeProvider>
        	);
    }
}

render(<Inicio />, document.getElementById('contenedor'));