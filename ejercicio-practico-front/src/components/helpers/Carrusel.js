import React, {useRef, useEffect, useCallback} from 'react';
import styled from 'styled-components';

const Slideshow = ({
    children,
    autoplay = false,
    velocidad="500",
    intervalo="5000"
}) => {
const slideshow = useRef(null);
const intervaloSlideshow = useRef(null);

const siguiente = useCallback(() => {
    // Comprobamos que el slideshow tenga elementos
    if(slideshow.current.children.length > 0){
        console.log('Siguiente')

        // Obtenemos el primer elemento del slideshow.
        const primerElemento = slideshow.current.children[0];

        // Establecemos la transicion para el slideshow.
        slideshow.current.style.transition = `${velocidad}ms ease-out all`;

        const tamañoSlide = slideshow.current.children[0].offsetWidth;

        // Movemos el slideshow
        slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

        const transicion = () => {
            // Reiniciamos la posicion del Slideshow.
            slideshow.current.style.transition = 'none';
            slideshow.current.style.transform = `translateX(0)`;

            // Tomamos el primer elemento y lo mandamos al final.
            slideshow.current.appendChild(primerElemento);

            slideshow.current.removeEventListener('transitionend', transicion);
        }

        // Eventlistener para cuando termina la animacion.
        slideshow.current.addEventListener('transitionend', transicion);

    }
}, [velocidad]);


useEffect(() => {
    if(autoplay){
        intervaloSlideshow.current = setInterval(() => {
            siguiente();
        }, intervalo);

        // Eliminamos los intervalos
        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(intervaloSlideshow.current);
        });

        // Volvemos a poner el intervalo cuando saquen el cursor del slideshow
        slideshow.current.addEventListener('mouseleave', () => {
            intervaloSlideshow.current = setInterval(() => {
                siguiente();
            }, intervalo);
        });
    }
}, [autoplay, intervalo, siguiente]);

return (
    <ContenedorPrincipal>
        <ContenedorSlideshow ref={slideshow}>
            {children}
        </ContenedorSlideshow>
    </ContenedorPrincipal>
);
}

const ContenedorPrincipal = styled.div`
position: relative;

`;

const ContenedorSlideshow = styled.div`
display: flex;
flex-wrap: nowrap;
`;

const Slide = styled.div`
min-width: 100%;
overflow: hidden;
transition: .3s ease all;
z-index: 10;
position: relative;
img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    vertical-align: top;
}
`;

const TextoSlide = styled.div`
background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)'};
color: ${props => props.colorTexto ? props.colorTexto : '#fff'};
width: 100%;
padding: 10px 60px;
text-align: center;
position: absolute;
bottom: 0;
@media screen and (max-width: 700px) {
    position: relative;
    background: #000;
}
`;

const Parrafo = styled.p`
font-size: 25px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`




export {Slideshow, Slide, TextoSlide, Parrafo};