import React, { Component } from "react";
import Formulario from "./Componentes/Formulario";
import Usuario from "./Componentes/Usuario";

export default class App extends Component {
    //constructor
    constructor(props) {
        super(props);
        this.state = {
            usuarios: [],
        };
    }

    //Metodo para montar componente
    componentDidMount() {
        this.BuscarDatos();
    }

    BuscarDatos = () => {
        const URL = 'https://reqres.in/api/users';
        fetch(URL).then((respuesta)=> respuesta.json()).then((usuariosJSON) => this.setState({usuarios:usuariosJSON.data}))
    };

    //render
    render() {
        return (
            <div>
                <Formulario/>
                {this.state.usuarios.map((e) => (
                    <Usuario
                        key={e.id}
                        id={e.id}
                        email={e.email}
                        first_name={e.first_name}
                        last_name={e.last_name}
                        avatar={e.avatar}
                        name={e.name} />))}
            </div>
        )
    }
}