import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/formulario.css";

const FormularioRegistro = () => {

  const[tipoIdentificacion, setTipoIdentificacion] = useState('');
  const[identificacion, setIdentificacion] = useState('');
  const[nombre, setNombre] = useState('');
  const[apellido, setApellido] = useState('');
  const[fechaNacimiento, setFechaNacimiento] = useState('');
  const[direccion, setDireccion] = useState('');
  const[pais, setPais] = useState('');
  const[departamento, setDepartamento] = useState('');
  const[ciudad, setCiudad] = useState('');
  const[marca, setMarca] = useState('');
  const navigate = useNavigate();


  const [tipos, setTipos] = useState([]);
  const [marcas, setMarcas] = useState([]);

  const [paises, setPaises] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [ciudades, setCiudades] = useState([]);

  // Llamar los paises
  useEffect(() => {
    axios.get("http://localhost:8080/paises").then((res) => setPaises(res.data));
  }, []);

  // Llamar los departamentos
  useEffect(() => {
    axios
      .get("http://localhost:8080/departamentos")
      .then((res) => setDepartamentos(res.data));
  }, []);

  // Llamar las ciudades
  useEffect(() => {
    axios
      .get("http://localhost:8080/ciudades")
      .then((res) => setCiudades(res.data));
  }, []);

  // Llamar los tipos de identificacion
  const getTipos = async () => {
    const res = await axios.get("http://localhost:8080/identificacion");
    setTipos(res.data);
  };
  // Llamar los tipos de marca
  const getMarcas = async () => {
    const res = await axios.get("http://localhost:8080/marca");
    setMarcas(res.data);
  };

  useEffect(() => {
    getTipos();
    getMarcas();
  }, []);

  const postUsuario = async (e, data) => {
    e.preventDefault()
    await axios.post('http://localhost:8080/usuario', {
      tipoIdentificacion: tipoIdentificacion,
      identificacion: identificacion,
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento: fechaNacimiento,
      direccion: direccion,
      pais: pais,
      departamento: departamento,
      ciudad: ciudad,
      marca: marca
    })

    navigate("/informe")
  }

  return (
    <section className="formulario">
      <h1>Ingresa tus datos y reclama tu bono de descuento</h1>
      <form onSubmit={postUsuario} className="form">
        <section className="contenedor">
          <label>Tipo de identificación</label>
          <select
            defaultValue={tipoIdentificacion}
            onChange={(e) => setTipoIdentificacion(e.target.value)}
            name="tipoIdentificacion"
            id="tipoIdentificacion"
            className="form_item"
          >
            <option value="">Elige un opción...</option>
            {tipos.map((tipo) => (
              <option key={tipo.id}>
                {tipo.tipoIdentificacion}
              </option>
            ))}
          </select>
        </section>
        <section className="grupoInput contenedor">
          <label>Número identificación</label>
          <input
            
            defaultValue={identificacion}
            onChange={(e) => setIdentificacion(e.target.value)}
            type="text"
            name="numeroIdentificacion"
            placeholder=""
          />
        </section>
        <section className="grupoInput contenedor">
          <label>Nombre</label>
          <input
            required
            defaultValue={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            name="nombres"
            id="nombres"
            placeholder=""
          />
        </section>
        <section className="grupoInput contenedor">
          <label>Apellidos</label>
          <input
            required
            defaultValue={apellido}
            onChange={(e) => setApellido(e.target.value)}
            type="text"
            name="apellidos"
            id="apellidos"
            placeholder=""
          />
        </section>
        <section className="grupoInput contenedor">
          <label>Fecha de nacimiento</label>
          <input
            required
            defaultValue={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            type="date"
            name="fechaNacimiento"
            id="fechaNacimiento"
            placeholder=""
          />
        </section>
        <section className="grupoInput contenedor">
          <label>Dirección</label>
          <input
            required
            defaultValue={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            type="text"
            name="direccion"
            id="direccion"
            placeholder=""
          />
        </section>
        <section className="contenedor">
          <label>País</label>
          <select
            defaultValue={pais}
            onChange={(e) => setPais(e.target.value)}
            name="pais"
            id="pais"
            className="form_item"
          >
            <option value="">Elige un opción...</option>
            {paises.map((pais) => (
              <option key={pais.id}>
                {pais.nombre}
              </option>
            ))}
          </select>
        </section>
        <section className="contenedor">
          <label>Departamento</label>
          <select
            defaultValue={departamento}
            onChange={(e) => setDepartamento(e.target.value)}
            name="departamento"
            id="item-details-stateValue"
            className="form_item"
          >
            <option value="">Elige un opción...</option>
            {departamentos.map((departamento) => (
              <option key={departamento.id}>
                {departamento.nombre}
              </option>
            ))}
          </select>
        </section>
        <section className="contenedor">
          <label>Ciudad</label>
          <select
            defaultValue={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            name="ciudad"
            id="ciudad"
            className="form_item"
          >
            <option value="">Elige un opción...</option>
            {ciudades.map((ciudad) => (
              <option key={ciudad.id}>
                {ciudad.nombre}
              </option>
            ))}
          </select>
        </section>
        <section className="contenedor">
          <label>Marca</label>
          <select
            defaultValue={marca}
            onChange={(e) => setMarca(e.target.value)}
            name="marca"
            id="marca"
            className="form_item"
          >
            <option value="">Elige un opción...</option>
            {marcas.map((marca) => (
              <option key={marca.id}>
                {marca.marca}{" "}
              </option>
            ))}
          </select>
        </section>
        <section className="grupoButton">
          <input
            type="submit"
            value="Enviar"
            className="btn enviar"
          ></input>
        </section>
      </form>
    </section>
  );
};

export default FormularioRegistro;
