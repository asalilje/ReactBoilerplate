import React from "react";

export default class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    navigate(location){
        this.props.onNavigate(location);
    }

    menuClassName(location) {
        return location === this.props.view ? "menu-item--active" : "menu-item";
    }

    render() {
        return(
            <div className="menu">
                <div className={this.menuClassName('start')} onClick={() => this.navigate('start')}>Start</div>
                <div className={this.menuClassName('contact')} onClick={() => this.navigate('contact')}>Contact</div>
            </div>
        );
    }
};