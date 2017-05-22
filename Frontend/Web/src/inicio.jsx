import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, IndexLink, hashHistory, Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
///
import Divider from 'material-ui/Divider';
import BarraYDrawer from './componentes/BarraYDrawer/barraYDrawer.jsx';
///


injectTapEventPlugin();

class Inicio extends Component {
	state = {
		open: false
	};

	clickBoton = () => this.setState({open:true});

    render(){
        return (
        	<MuiThemeProvider>
        		<div>
        			<BarraYDrawer />

        			<img 
        				src="img/logo-g.png" 
        				height="200" width="200" 
        				style={{"margin":"auto", "display":"block"}}
        				/>

        			<Divider/>
        		</div>
        	</MuiThemeProvider>
        	);
    }
}

render(<Inicio />, document.getElementById('contenedor'));