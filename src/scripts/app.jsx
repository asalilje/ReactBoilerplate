import React from "react";
import Menu from "./menu";
import Start from "./start";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'start'
        };
    }

    navigateTo(view) {
        this.setState({view: view})
    }

    renderContent() {
        switch(this.state.view) {
            case 'start':
                return <Start />;
            default: return null;
        }
    }

    render() {
        return (
            <div>
                <Menu view={this.state.view} onNavigate={this.navigateTo.bind(this)} />
                <div>{this.renderContent()}</div>
            </div>
        );
    }
};