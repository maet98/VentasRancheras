import React from "react";
import logoImg from "../../logo.svg";
import NavBar from "./NavBar";

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
                <div className="image">
                    <img src={logoImg} />
                </div>
            </div>
        );
    }

}
export default Menu;