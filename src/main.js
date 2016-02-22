/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	/*globals window __webpack_hash__ */
	"use strict";
	
	if (false) {
		var lastData;
		var upToDate = function upToDate() {
			return lastData.indexOf(__webpack_hash__) >= 0;
		};
		var check = function check() {
			module.hot.check(true, function (err, updatedModules) {
				if (err) {
					if (module.hot.status() in {
						abort: 1,
						fail: 1
					}) {
						console.warn("[HMR] Cannot apply update. Need to do a full reload!");
						console.warn("[HMR] " + err.stack || err.message);
						window.location.reload();
					} else {
						console.warn("[HMR] Update failed: " + err.stack || err.message);
					}
					return;
				}
	
				if (!updatedModules) {
					console.warn("[HMR] Cannot find update. Need to do a full reload!");
					console.warn("[HMR] (Probably because of restarting the webpack-dev-server)");
					window.location.reload();
					return;
				}
	
				if (!upToDate()) {
					check();
				}
	
				require("./log-apply-result")(updatedModules, updatedModules);
	
				if (upToDate()) {
					console.log("[HMR] App is up to date.");
				}
			});
		};
		var addEventListener = window.addEventListener ? function (eventName, listener) {
			window.addEventListener(eventName, listener, false);
		} : function (eventName, listener) {
			window.attachEvent("on" + eventName, listener);
		};
		addEventListener("message", function (event) {
			if (typeof event.data === "string" && event.data.indexOf("webpackHotUpdate") === 0) {
				lastData = event.data;
				if (!upToDate() && module.hot.status() === "idle") {
					console.log("[HMR] Checking for updates on the server...");
					check();
				}
			}
		});
		console.log("[HMR] Waiting for update signal from WDS...");
	} else {
		throw new Error("[HMR] Hot Module Replacement is disabled.");
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	var App = __webpack_require__(4);
	
	React.render(React.createElement(App, null), document.body);

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	var Menu = __webpack_require__(5);
	var Start = __webpack_require__(6);
	
	var App = React.createClass({
	    displayName: "App",
	
	    getInitialState: function getInitialState() {
	        return { view: 'start' };
	    },
	    navigateTo: function navigateTo(view) {
	        this.setState({ view: view });
	    },
	    renderContent: function renderContent() {
	        switch (this.state.view) {
	            case 'start':
	                return React.createElement(Start, null);
	            default:
	                return null;
	        }
	    },
	    render: function render() {
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(Menu, { view: this.state.view, navigateTo: this.navigateTo }),
	            React.createElement(
	                "div",
	                null,
	                this.renderContent()
	            )
	        );
	    }
	});
	
	module.exports = App;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	
	var Menu = React.createClass({
	    displayName: "Menu",
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            null,
	            "Meny"
	        );
	    }
	});
	
	module.exports = Menu;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	
	var Start = React.createClass({
	    displayName: "Start",
	
	    render: function render() {
	        return React.createElement(
	            "div",
	            null,
	            "Startsida nummer ett"
	        );
	    }
	});
	
	module.exports = Start;

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map