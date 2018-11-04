webpackHotUpdate("static/development/pages/material-ui.js",{

/***/ "./components/Code.js":
/*!****************************!*\
  !*** ./components/Code.js ***!
  \****************************/
/*! exports provided: Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/herman/my/react-color-sliders/example/components/Code.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var Code = function Code(_ref) {
  var hues = _ref.hues,
      lightnesses = _ref.lightnesses,
      saturation = _ref.saturation,
      exportTypes = _ref.exportTypes,
      exportType = _ref.exportType,
      setExportType = _ref.setExportType,
      className = _ref.className,
      hsl = _ref.hsl,
      props = _objectWithoutProperties(_ref, ["hues", "lightnesses", "saturation", "exportTypes", "exportType", "setExportType", "className", "hsl"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", _extends({
    className: "bg-dark text-white p-3 rounded shadow small ".concat(className)
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn-group",
    role: "group",
    "aria-label": "Basic example",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, exportTypes.map(function (type) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      key: type.name,
      type: "button",
      onClick: function onClick() {
        return setExportType(type.name);
      },
      className: "btn btn-sm btn-outline-light ".concat(exportType === type.name ? "bg-light text-dark" : ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, name.toUpperCase());
  })), "\n\n", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, exportTypes.find(function (_) {
    return _ === exportType;
  }).toString({
    hues: hues,
    lightnesses: lightnesses,
    saturation: saturation,
    hsl: hsl
  })));
};

/***/ })

})
//# sourceMappingURL=material-ui.js.59820e4bfbe614cd1673.hot-update.js.map