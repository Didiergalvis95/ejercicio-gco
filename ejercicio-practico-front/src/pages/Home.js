import { Slide, Slideshow, TextoSlide, Parrafo } from "../components/helpers/Carrusel";
import React from 'react';
import '../App.css';  
import styled from 'styled-components';
import chevignon from "../imagenes/chevignon.png"
import americaneagle from "../imagenes/americaneagle.png"
import gstarraw from "../imagenes/gstarraw.png"
import americanino from "../imagenes/americanino.png"
import nafnaf from "../imagenes/nafnaf.png"
import rifle from "../imagenes/rifle.png"
import esprit from "../imagenes/esprit.png"
import todoal50 from "../imagenes/todoal50.png"
import { Link } from "react-router-dom";

const Home = () => {
  return (
		<main className="d-flex align-items-center flex-column">
			<Titulo className="w-100 text-center">Suscribete y recibe descuentos exclusivos</Titulo>
			<Slideshow controles={true} autoplay={true} velocidad="3500" intervalo="3000">
				<Slide>
					<a target="blank" href="https://www.chevignon.com.co/">
						<img src={chevignon} alt=""/>
					</a>
					<TextoSlide colorFondo="#858585">
						<Parrafo>25% descuento</Parrafo>
					</TextoSlide>
				</Slide>
				<Slide>
					<a target="blank" href="https://www.ae.com.co/">
						<img src={americaneagle} alt="americaneagle"/>
					</a>
					<TextoSlide colorFondo="#858585">
						<Parrafo>15% descuento</Parrafo>
					</TextoSlide>
				</Slide>
				<Slide>
					<a target="blank" href="https://www.g-star.com/en_us">
						<img src={gstarraw} alt="gstarraw"/>
					</a>
					<TextoSlide colorFondo="#858585">
						<Parrafo>10% descuento</Parrafo>
					</TextoSlide>
				</Slide>
        <Slide>
					<a target="blank" href="https://www.americanino.com/">
						<img src={americanino} alt="americanino"/>
					</a>
					<TextoSlide colorFondo="#858585">
						<Parrafo>25% descuento</Parrafo>
					</TextoSlide>
				</Slide>
				<Slide>
					<a target="blank" href="https://www.nafnaf.com.co/">
						<img src={nafnaf} alt="nafnaf"/>
					</a>
					<TextoSlide colorFondo="#858585">
						<Parrafo>25% descuento</Parrafo>
					</TextoSlide>
				</Slide>
				<Slide>
					<a target="blank" href="https://www.rifle.com.co/">
						<img src={rifle} alt="rifle"/>
					</a>
					<TextoSlide colorFondo="#858585">
						<Parrafo>25% descuento</Parrafo>
					</TextoSlide>
				</Slide>
        <Slide>
					<a target="blank" href="https://www.esprit.com.co/">
						<img src={esprit} alt="esprit"/>
					</a>
					<TextoSlide colorFondo="#858585">
						<Parrafo>25% descuento</Parrafo>
					</TextoSlide>
				</Slide>
				<Slide>
					<a target="blank" href="https://outlettodoal50.com/">
						<img src={todoal50} alt="todoal50"/>
					</a>
					<TextoSlide colorFondo="#858585">
						<Parrafo>10% descuento adicional</Parrafo>
					</TextoSlide>
				</Slide>
			</Slideshow>

      <Link to="/registro" className="btn btn-suscribirse mt-3" >Suscribete</Link>
      
		</main>
	);
}

const Titulo = styled.p`
	font-size: 28px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;
  
  export default Home;