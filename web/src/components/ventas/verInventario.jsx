import React from "react";
import inventarioImg from "../../inventario2.svg";
import NavBar from "../ventas/NavBar";

export class verInventario extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <div className="base-container" ref={this.props.containerRef}>
                <div>
                    <NavBar />
                </div>
                <div className="header">Inventario</div>
                <div className="content">
                    <div className="image">
                        <img src={inventarioImg} />
                    </div>
                </div>
            </div>
    );
  }
}
export default verInventario