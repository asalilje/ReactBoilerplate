var React = require("react");
var App = require("./app");

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

React.render(<App/>, document.body);