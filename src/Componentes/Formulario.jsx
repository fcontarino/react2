import React from "react";
import '../recursos/CSS/form.css'
import '../recursos/CSS/button.css'

export default class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: ""
        }
    }

    LimpiarValoresFormulario = (e) => {
        this.setState({
            first_name: "",
            last_name: "",
            email: ""
        })
    }

    AsignarValoresFormulario = (evento) => {
        this.setState({
            [evento.target.name]: evento.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        placeholder="Nombre"
                        required={true}
                        value={this.state.first_name}
                        onChange={this.AsignarValoresFormulario}
                    />
                    <input
                        id="last_name"
                        type="text"
                        name="last_name"
                        placeholder="Apellido"
                        required={true}
                        value={this.state.last_name}
                        onChange={this.AsignarValoresFormulario}
                    />
                    <input
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Correo"
                        required={true}
                        value={this.state.email}
                        onChange={this.AsignarValoresFormulario}
                    />
                    <div>
                        <button type="submit" className="success" >Agregar usuario</button>
                        <button type="reset" className="warning" onClick={this.LimpiarValoresFormulario}>Limpiar Formulario</button>
                    </div>
                </form>
            </div>
        )
    }
}