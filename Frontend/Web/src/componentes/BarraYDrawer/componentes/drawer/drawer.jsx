import React, { Component } from 'react';
///
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import Person from 'material-ui/svg-icons/social/person';
import Build from 'material-ui/svg-icons/action/build';
import Map from 'material-ui/svg-icons/maps/map';
import Search from 'material-ui/svg-icons/action/search';
import Bookmark from 'material-ui/svg-icons/action/bookmark';
import Language from 'material-ui/svg-icons/action/language';
import Message from 'material-ui/svg-icons/communication/message';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
///

class InmoDrawer extends Component {
	 constructor(props) {
	 super(props);
	
  }
	clickConfiguracion = () => {
		console.log('Configuracion');
	};
	
	clickInmuebles = () => {
		console.log('Inmuebles');
	}
	
    clickBuscar = () =>{
		console.log('Buscar');
	}
	
    clickMapa = () => {
		console.log('Mapa');
	} 
	
	clickGlobo = () => {
		console.log('Globo');
	}	
	
	clickMensaje = () => {
		console.log('Mensaje');
	}

    render(){
        return (
			<Drawer 
				docked={false}
				width={300}
				open={this.props.open}
                onRequestChange={this.props.onRequestChange}
				>

				 <Card  style={{backgroundColor: '#2196F3'}}>
					<CardHeader
					  title="Jesus Rondon"
					  subtitle="jesus@rondon.com"
					  avatar={<Avatar size={40} icon={<Person />}></Avatar> }
					/>

					<CardActions>
					  <FlatButton onTouchTap={this.clickGlobo} icon={<Language />} hoverColor="rgba(0, 0, 0, 0)" style={{marginLeft:"90px", color:"red"}} />
					  <FlatButton onTouchTap={this.clickMensaje} icon={<Message />} hoverColor="rgba(0, 0, 0, 0)" style={{marginLeft:"0px"}} />
					</CardActions>
				</Card>
					         
				<MenuItem leftIcon={<Build />} onTouchTap={this.clickConfiguracion} >Configuración</MenuItem>
				<MenuItem leftIcon={<Bookmark />} onTouchTap={this.clickInmuebles} >Inmuebles guardados</MenuItem>
				<MenuItem leftIcon={<Search />} onTouchTap={this.clickBuscar} >Buscar</MenuItem>
				<MenuItem leftIcon={<Map />} onTouchTap={this.clickMapa} >Mapa</MenuItem>

			</Drawer>
        	);
    }
}

export default InmoDrawer