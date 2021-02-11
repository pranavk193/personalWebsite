import React from "react";
import ReactDOM from "react-dom";
import RBCarousel from "react-bootstrap-carousel";
import { Row, Col, Button, ButtonGroup } from "./bootstrap-component.jsx";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './imgs/IMG_6426.JPG'
import image2 from './imgs/IMG_6427.JPG'
import './ImageSlider.css';


function ImageSlider() {
    return (
        <div className='ImageSlider'> 
            <AliceCarousel autoPlay infinite autoPlayInterval="3000">
                <img src={image1} className="sliderimg" alt=""/>
                <img src={image2} className="sliderimg" alt=""/>
            </AliceCarousel>
        </div>
    );
}
export default ImageSlider;