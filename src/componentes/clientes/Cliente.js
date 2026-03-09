function Cliente({cliente}) {
    const {nombre, apellido, empresa, email, telefono} = cliente;
    return (
        <ul className="listado-cliente">
        <li className="cliente">
            <div className="info-cliente">
                <p className="nombre">{nombre} {apellido}</p>
                <p className="empresa">{empresa}</p>
                <p>correo: {email}</p>
                <p>Tel: {telefono}</p>
            </div>
            <div className="acciones">
                <a href="#" className="btn btn-azul">
                    <i class="fas fa-pen-alt"></i>
                    Editar Cliente
                </a>
                <button type="button" className="btn btn-rojo btn-eliminar">
                    <i className="fas fa-times"></i>
                    Eliminar Cliente
                </button>
            </div>
        </li>
        </ul>
    );
}
export default Cliente;