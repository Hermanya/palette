webpackHotUpdate("static/development/pages/bootstrap.js",{

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_color_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-color-sliders */ "../dist/index.es.js");
/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Code */ "./components/Code.js");
/* harmony import */ var _LightnessControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LightnessControl */ "./components/LightnessControl.js");
/* harmony import */ var _HueControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HueControl */ "./components/HueControl.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Label */ "./components/Label.js");
/* harmony import */ var _Herman__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Herman */ "./components/Herman.js");
var _jsxFileName = "/Users/herman/my/react-color-sliders/example/components/App.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var App =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(App, _React$PureComponent);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hsl", function (hue, lightness) {
      return "hsl(".concat(_this.state.hues.find(function (_) {
        return _.name === hue;
      }).value, ", ").concat(_this.state.saturation, "%, ").concat(_this.state.lightnesses.find(function (_) {
        return _.name === lightness;
      }).value, "%)");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setHue", function (name, value) {
      _this.setState({
        hues: _this.state.hues.map(function (_) {
          return _.name === name ? _objectSpread({}, _, {
            value: value
          }) : _;
        })
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setLightness", function (name, value) {
      _this.setState({
        lightnesses: _this.state.lightnesses.map(function (_) {
          return _.name === name ? _objectSpread({}, _, {
            value: value
          }) : _;
        })
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setSaturation", function (saturation) {
      _this.setState({
        saturation: saturation
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setExportType", function (type) {
      _this.setState({
        exportType: type
      });
    });

    _this.state = _objectSpread({}, props.initialState);
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var columnClass = this.props.columnClass;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "position-relative overflow-x-hidden ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "py-5 container position-relative z-index-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "display-4 mb-4 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Make a", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          color: this.props.libraryColor
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, this.props.libraryName), " ", "color palette"), " ", "for your theme"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "row mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: columnClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_5__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Saturation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_color_sliders__WEBPACK_IMPORTED_MODULE_1__["SaturationSlider"], {
        hue: this.state.hues[0].value,
        name: "saturation",
        saturation: this.state.saturation,
        lightness: this.state.lightnesses[Math.floor(this.state.lightnesses.length / 2)].value,
        onUpdate: this.setSaturation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), this.state.hues.map(function (hue) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: hue.name,
          className: "mt-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_5__["Label"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, hue.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HueControl__WEBPACK_IMPORTED_MODULE_4__["HueControl"], {
          style: {
            marginBottom: 42
          },
          name: hue.name,
          hue: hue.value,
          lightness: _this2.state.lightnesses[Math.floor(_this2.state.lightnesses.length / 2)].value,
          saturation: _this2.state.saturation,
          setHue: _this2.setHue,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }));
      })), this.state.lightnesses.map(function (lightness) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: columnClass,
          key: lightness.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_5__["Label"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, lightness.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LightnessControl__WEBPACK_IMPORTED_MODULE_3__["LightnessControl"], _extends({
          className: "mb-4",
          saturation: _this2.state.saturation,
          setLightness: _this2.setLightness
        }, lightness, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        })), _this2.state.hues.map(function (hue) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: hue.name + lightness.name,
            className: " mb-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "rounded shadow-sm",
            style: {
              height: 64,
              background: "linear-gradient(to bottom,\n                        ".concat(_this2.hsl(hue.name, lightness.name), ",\n                        ").concat(_this2.hsl(hue.name, lightness.name), ")")
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: this
          }));
        }));
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "col-lg-4 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "lead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "How this works:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "You adjust the base color per row"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Change lightness per column"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Set color intensity across all colors using the saturation slider"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Export your colors in", " ", this.props.exportTypes.map(function (_) {
        return _.name;
      }).join(", "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-justify",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "This app is built using React. Source code is available on", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://github.com/Hermanya/palette/tree/master/example",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "GitHub"), ". ", "All sliders used on this page are published on npm as", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("var", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "react-color-sliders"), ",", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://github.com/Hermanya/palette/blob/master/README.md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "see documentation"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-justify",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Besides ", this.props.libraryName, ", I also made similar color tools for", " ", ["Bootstrap", "Tailwind", "Material UI"].filter(function (_) {
        return _ !== _this2.props.libraryName;
      }).map(function (lib, i, xs) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          key: lib,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "./".concat(lib.toLowerCase().replace(/\s/g, "-")),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, lib), i !== xs.length - 1 ? " and " : ".");
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Herman__WEBPACK_IMPORTED_MODULE_6__["Herman"], {
        className: "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Code__WEBPACK_IMPORTED_MODULE_2__["Code"], {
        lightnesses: this.state.lightnesses,
        hues: this.state.hues,
        saturation: this.state.saturation,
        exportTypes: this.props.exportTypes,
        exportType: this.state.exportType,
        setExportType: this.setExportType,
        hsl: this.hsl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-palette position-absolute text-light z-index-1",
        style: {
          top: "-5vw",
          right: "-5vw",
          transform: "rotate(-90deg)",
          fontSize: "25vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-swatchbook position-absolute text-light z-index-1",
        style: {
          transform: "rotate(90deg)",
          top: "1vw",
          left: "1vw",
          fontSize: "25vw"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);



/***/ })

})
//# sourceMappingURL=bootstrap.js.574c0edb732608fd0d2e.hot-update.js.map