import React, { Component } from 'react';


import { Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator} from 'material-ui/Toolbar';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

class Barra extends Component {
    render(){
        return (
        		<Toolbar>
        			<ToolbarGroup firstChild={true}>
	        			<IconButton style={{"marginLeft":"15px"}}>
	        				<NavigationMenuIcon />
	        			</IconButton>
	        			<ToolbarSeparator />
	        			
	        			<img src="img/logo.png"  style={{"marginLeft":"24px", "marginRight":"24px"}}/>
	        			<ToolbarTitle text="Tu solución inmobiliaria"/>
				    </ToolbarGroup>
				    <ToolbarGroup>
				    	<FlatButton label="Registrate" backgroundColor="#a4c639" />
			          	<FlatButton label="Inicia sesión" primary={true} backgroundColor="#a4c639"/>
			        </ToolbarGroup>
        		</Toolbar>
        	);
    }
}

export default Barra