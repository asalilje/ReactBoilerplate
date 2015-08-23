var React = require("react");

var Menu = require('material-ui/lib/menus/menu');
var MenuItem = require('material-ui/lib/menus/menu-item');
var MenuDivider = require('material-ui/lib/menus/menu-divider');


var AppMenu = React.createClass({
    render: function() {
        return(
            <Menu>
                <MenuItem primaryText="Maps" />
                <MenuItem primaryText="Books" />
                <MenuItem primaryText="Flights" />
                <MenuItem primaryText="Apps" />
            </Menu>
        );
    }
});

module.exports = AppMenu;