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
            encendidoVerde: 0,
        }
    }

    cambiarLuz = (e) => {
        if (e.target.id=="redLight"&&this.state.encendidoRojo===0) { 
            e.target.classList.remove("alert-danger");
            e.target.classList.add("bg-danger") 
            this.setState({
                encendidoRojo:1
            })
        } else if (e.target.id=="redLight"&&this.state.encendidoRojo===1) { 
            e.target.classList.add("alert-danger");
            e.target.classList.remove("bg-danger") 
            this.setState({
                encendidoRojo:0
            })
        } 
        
        if (e.target.id=="yellowLight"&&this.state.encendidoAmarillo===0) { 
            e.target.classList.remove("alert-warning");
            e.target.classList.add("bg-warning") 
            this.setState({
                encendidoAmarillo:1
            })
        } else if (e.target.id=="yellowLight"&&this.state.encendidoAmarillo===1) { 
            e.target.classList.add("alert-warning");
            e.target.classList.remove("bg-warning") 
            this.setState({
                encendidoAmarillo:0
            })
        }

        if (e.target.id=="greenLight"&&this.state.encendidoVerde===0) { 
            e.target.classList.remove("alert-success");
            e.target.classList.add("bg-success") 
            this.setState({
                encendidoVerde:1
            })
        } else if (e.target.id=="greenLight"&&this.state.encendidoVerde===1) { 
            e.target.classList.add("alert-success");
            e.target.classList.remove("bg-success") 
            this.setState({
                encendidoVerde:0
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
