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
					  <FlatButton icon={<Language />} hoverColor="rgba(0, 0, 0, 0)" style={{paddingLeft:"150px", color:"red"}} />
					  <FlatButton icon={<Message />} hoverColor="rgba(0, 0, 0, 0)" style={{float:"right"}} />
					</CardActions>
				</Card>
					         
				<MenuItem leftIcon={<Build />} >Configuración</MenuItem>
				<MenuItem leftIcon={<Bookmark />} >Inmuebles guardados</MenuItem>
				<MenuItem leftIcon={<Search />} >Buscar</MenuItem>
				<MenuItem leftIcon={<Map />} >Mapa</MenuItem>

			</Drawer>
        	);
    }
}

export default InmoDrawer