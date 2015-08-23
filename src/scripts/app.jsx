var React = require("react");
var AppMenu = require("./menu");
var Start = require("./start");
var mui = require("material-ui");

var ThemeManager = new mui.Styles.ThemeManager();

var App = React.createClass({
    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },
    getInitialState: function() {
        return {view: 'start'}
    },
    navigateTo: function(view) {
        this.setState({view: view})
    },
    renderContent: function() {
        switch(this.state.view) {
            case 'start':
                return <Start />;
            default: return null;
        }
    },
    render: function() {
        return (
            <div>
                <AppMenu view={this.state.view} navigateTo={this.navigateTo} />
                <div>{this.renderContent()}</div>
            </div>
        );
    }
});

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

module.exports = App;