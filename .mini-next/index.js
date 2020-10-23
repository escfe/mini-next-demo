'use strict';

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _root = require("react-hot-loader/root");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var App = require('../src/pages/index/index.js');
App = App.default?App.default:App;
var inBrowser = typeof window !== 'undefined';

if (inBrowser) {
  window.__miniNext_DATA__ = window.__miniNext_DATA__ || {};
  var root = document.getElementById('app');

  if (!root) {
    var rootDom = document.createElement('div');
    rootDom.id = 'app';
    document.body.appendChild(rootDom);
  }
}

inBrowser && _reactDom["default"].hydrate( /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, {
  basename: "/index"
}, /*#__PURE__*/_react["default"].createElement(App, _extends({}, window.__miniNext_DATA__.serverProps, {
  pathName: window.__miniNext_DATA__.pathName || '',
  pageName: window.__miniNext_DATA__.pageName || '',
  query: window.__miniNext_DATA__.query || ''
}))), document.getElementById('app'));
module.exports = (0, _root.hot)(App);