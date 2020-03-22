import React from "react";
import logoImg from "../../logo.svg";
import NavBar from "./NavBar";
import { Carousel } from 'react-bootstrap';
import "../login/style.scss"

export class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div>
                    <NavBar />
                </div>
                <div className="imageCar">
                    <Carousel className="Letra">
                        <Carousel.Item>
                            <img src={logoImg} />
                            <Carousel.Caption>
                                <h3>Ventas Rancheras</h3>
                                <p>Todo a tu alcance. Lo que quieras comprar, te lo llevamos.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={logoImg} />
                            <Carousel.Caption>
                                <h3>Ventas Rancheras</h3>
                                <p >Todo a tu alcance. Lo que quieras comprar, te lo llevamos.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={logoImg} />
                            <Carousel.Caption>
                                <h3>Ventas Rancheras</h3>
                                <p>Todo a tu alcance. Lo que quieras comprar, te lo llevamos.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }

}
export default Menu;