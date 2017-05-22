import React, { Component } from 'react';
import Barra from './componentes/barra/barra.jsx';
import Drawer from './componentes/drawer/drawer.jsx';

/*Props
    clickMenu
    titulo
    clickIniciarSesion
    clickRegistro
*/
class BarraYDrawer extends Component {
    state = {
        open: false
    };

    clickBoton = () => this.setState({open: !this.state.open});

    render(){
        return (
                <div>
                    <Barra 
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