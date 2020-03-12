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
            active: ''
        }
    }
    cambiarLuz = e => {
        if (e.target.id == "redLight") {
            this.setstate({
                active: "danger"
            })
        } 
        else if (e.target.id == "yellowLight") {
            this.setstate({
                active: "warning"
            })
        } 
        else if (e.target.id == "greenLight") {
            this.setstate({
                active: "warning"
            })
        }
    }

    render() {
        return (
            <div className="container justify-content-center" id= "semaforo">
                <div id="" className={" bg-danger mb-3 redLight" + (this.state.active === "danger" ? "border border-danger" : "")} role="alert" onClick={e => this.cambiarColor(e)}>0</div>
                <div id="" className={" bg-warning mb-3 yellowLight" + (this.state.active === "warning" ? "border border-warning" : "")} role="alert" onClick={e => this.cambiarColor(e)}>0</div>
                <div id="" className={" bg-success mb-3 greenLight" + (this.state.active === "success" ? "border border-success" : "")} role="alert" onClick={e => this.cambiarColor(e)}>0</div>
            </div>
        )
    }
}

ReactDOM.render(<TrafiicLight />, document.querySelector("#root"));
