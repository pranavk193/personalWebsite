import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

class BootstrapSlider extends React.Component{

    render(){
        return(
            <Carousel>
                <Carousel.Item>
                <img
                    className="c-block w-75"
                    src="cricket1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Passionate cricket player</h3>
                    <p>Opening batsman, and medium pace bowler</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="c-block w-75"
                    src="codingpic.jpg"
                    alt="Second slide"
                />
            
                <Carousel.Caption>
                    <h3>NiceSnippets.com slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="c-block w-75"
                    src="invest.jpg"
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3>NiceSnippets.com slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
    
}

export default BootstrapSlider;