import React, { Component } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle, ToolbarSeparator} from 'material-ui/Toolbar';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

/*Props
	clickMenu
	titulo
	clickIniciarSesion
	clickRegistro
*/
class Barra extends Component {
	constructor(props) {
		super(props);
		this.state ={
			titulo:'',
			clickMenu:''
		}
		console.log(props);
	}
	 
    render(){
        return (
        		<Toolbar>
        			<ToolbarGroup 
        				firstChild={true}
        				>


	        			<IconButton 
	        				style={{"marginLeft":"15px"}}
	        				>

	        				<NavigationMenuIcon 
	        					onClick={this.props.clickMenu}
	        				/>

	        			</IconButton>

	        			<ToolbarSeparator />

	        			<img 
	        				src="img/logo.png"  
	        				style={{"marginLeft":"24px", "marginRight":"24px"}}
	        				/>	

	        			<ToolbarTitle 
	        				text={this.props.titulo}
	        				/>

				    </ToolbarGroup>

				    <ToolbarGroup>
				    	<FlatButton 
				    		label="Registrate" 
				    		backgroundColor="#a4c639"				    		
				    		/>

			          	<FlatButton 
			          		label="Inicia sesión" 
			          		backgroundColor="#a4c639"			          		
			          		/>

			        </ToolbarGroup>
        		</Toolbar>
        	);
    }
}

export default Barra