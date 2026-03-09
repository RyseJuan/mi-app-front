import { Fragment, useEffect, useState } from "react";
import { clienteAxios } from "../../config/axios";
import  Cliente  from "./Cliente.js";
import { Link } from  "react-router-dom"



function Clientes() {

    const [clientes, guardarClientes] = useState([]);
    
    const consultarAPI = async () => {
        
        const consultarCliente = await clienteAxios.get('/clientes');
        console.log(consultarCliente.data);
        guardarClientes(consultarCliente.data)
    }

    useEffect(() => {
        consultarAPI();
    }, []);

    return (
        <Fragment>
            <h1>Clientes</h1>
            <Link href="nuevo-cliente.html" class="btn btn-verde nvo-cliente"> <i class="fas fa-plus-circle"></i>
                Nuevo Cliente
            </Link>
            <ul className="listado-clientes">
                {clientes.map(cliente => 
                    <Cliente key = {cliente._id}
                        cliente={cliente}
                    />
                )};
            </ul>
        </Fragment>
    );
}

export default Clientes;