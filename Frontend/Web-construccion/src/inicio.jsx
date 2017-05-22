import React, { Component } from 'react';
import { render } from 'react-dom';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { red400, red600, blue400, blue600, cyan100, cyan300, orange400, orange600, lightGreen400, lightGreen600} from 'material-ui/styles/colors'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
///


injectTapEventPlugin();

class LogoMulti extends Component {
    render(){
        return(
            <div className={"fadein"}>
                <img id="f4" src="https://i.imgur.com/zjPZmBY.png"></img>
                <img id="f3" src="https://i.imgur.com/QCtEzBv.png"></img>
                <img id="f2" src="https://i.imgur.com/aWzDtCz.png"></img>
                <img id="f1" src="https://i.imgur.com/t3Z2w2h.png"></img>
            </div>
        );
    }
}

class Inicio extends Component {
    render(){
        return (

            <MuiThemeProvider>
        	<div>
              <div className={"ald"}> </div>
              <AutoRotatingCarousel
                label="Muy pronto"
                open
                style={{backgroundColor:"none"}}
              >
                <Slide
                  media={<LogoMulti />}
                  mediaBackgroundStyle={{ backgroundColor: cyan100 }}
                  contentStyle={{ backgroundColor: cyan300 }}
                  title="Tu solución inmobiliaria."
                  subtitle="El manejo de tus inmuebles. Una sola plataforma."
                />

                <Slide
                  media={<img className={"imgSplash"} src="https://i.imgur.com/aWzDtCz.png" />}
                  mediaBackgroundStyle={{ backgroundColor: blue400 }}
                  contentStyle={{ backgroundColor: blue600 }}
                  title="Para empresas."
                  subtitle="Porque sus necesidades, son tambien escuchadas. Avalada por la Cámara inmobiliaria de Venezuela."
                />

                <Slide
                  media={<img className={"imgSplash"} src="https://i.imgur.com/QCtEzBv.png" />}
                  mediaBackgroundStyle={{ backgroundColor: lightGreen400 }}
                  contentStyle={{ backgroundColor: lightGreen600 }}
                  title="Para empresarios."
                  subtitle="Nunca fue mas sencillo encontrar ese local que buscas. ¡ Al mejor precio !"
                />

                <Slide
                  media={<img className={"imgSplash"} src="https://i.imgur.com/2kabgUc.png" />}
                  mediaBackgroundStyle={{ backgroundColor: orange400 }}
                  contentStyle={{ backgroundColor: orange600 }}
                  title="Para tu hogar."
                  subtitle="¿Buscas tu hogas cerca de una escuela? ¿de un banco? te ayudamos en eso."
                />
                
              </AutoRotatingCarousel>
            </div>
            </MuiThemeProvider>
        	);
    }
}

render(<Inicio />, document.getElementById('contenedor'));