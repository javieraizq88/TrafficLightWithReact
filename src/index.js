import React from 'react';
import ReactDOM from 'react-dom';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x

// Custom CSS
import './index.css';

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';

class TrafiicLight extends React.Component {
    constructor() {
        super();
        this.state = {
            encendidoRojo: 0,
            encendidoAmarillo: 0,
            encendidoVerde: 0
        }
    }

    cambiarLuz = (e) => {
        if (e.target.id=="redLight"&&this.state.encendido===0) { 
            e.target.classList.remove("alert-danger");
            e.target.classList.add("bg-danger") 
            this.setState({
                encendidoRojo:1
            })
        }
        if (e.target.id=="redLight"&&this.state.encendido===1) { 
            e.target.classList.add("alert-danger");
            e.target.classList.remove("bg-danger") 
            this.setState({
                encendidoRojo:0
            })
        }
    } 
    


    render() {
        return (
            <div className="container justify-content-center" id= "semaforo">
                <div id="redLight" className={" alert-danger redLight"}  onClick={this.cambiarLuz}></div>
                <div id="yellowLight" className={" alert-warning yellowLight"} onClick={e => this.cambiarLuz(e)}></div>
                <div id="greenLight" className={" alert-success greenLight"} onClick={e => this.cambiarLuz(e)}></div>
            </div>
        )
    }
}

ReactDOM.render(<TrafiicLight />, document.querySelector("#root"));
