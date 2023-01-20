import axios from "axios";
import { useEffect, useState } from "react";
import "../../assets/styles/tablaInforme.css"

const TablaInformes = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    getUsuarios();
  }, [])

  const getUsuarios = async () =>{
    const res = await axios.get('http://localhost:8080/usuario');
    setUsuarios(res.data);
  }


  return (
    <section className="tabla d-flex flex-column align-items-center">
      <h2>Usuarios Registrados</h2>
      <table className="table table-dark table-borderless">
        <thead>
          <tr className="">
            <th scope="col">Tipo de documento</th>
            <th scope="col">Número de documento</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Fecha de Nacimiento</th>
            <th scope="col">Dirección</th>
            <th scope="col">País</th>
            <th scope="col">Departamento</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Marca</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <th>{usuario.tipoIdentificacion}</th>
              <th>{usuario.identificacion}</th>
              <th>{usuario.nombre}</th>
              <th>{usuario.apellido}</th>
              <th>{usuario.fechaNacimiento}</th>
              <th>{usuario.direccion}</th>
              <th>{usuario.pais}</th>
              <th>{usuario.departamento}</th>
              <th>{usuario.ciudad}</th>
              <th>{usuario.marca}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TablaInformes;
