import React, { Component } from 'react';
import Barra from './componentes/barra/barra.jsx';
import Drawer from './componentes/drawer/drawer.jsx';

/*Props
   usuario
   msgPorLeer
   notPorVer
   titulo
   
   clickMenu
   clickIniciarSesion
   clickRegistro
*/
class BarraYDrawer extends Component {
     constructor(props) {
	 super(props);
	 
	 this.state = {
        open: false,
		usuario:'',
		titulo:'Inmo',
		msgPorLeer:0,
		notPorVer:0
    };
  }

    clickBoton = () => this.setState({open: !this.state.open});

    render(){
        return (
                <div>
                    <Barra 
						titulo={this.state.titulo}
                        clickMenu={this.clickBoton}
                        />

                    <Drawer 
                        open={this.state.open}
                        onRequestChange={this.clickBoton}
                        />  
                </div>                     
            );
    }
}

export default BarraYDrawer