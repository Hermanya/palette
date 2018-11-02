webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consts */ "./components/consts.js");
var _jsxFileName = "/Users/herman/my/react-color-sliders/example/components/App.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function Label(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", _extends({
    className: "text-muted text-uppercase text-center d-block"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
}

var Hue =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Hue, _React$PureComponent);

  function Hue() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Hue);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Hue)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setValue", function (value) {
      return _this.props.setPalette(_this.props.color, {
        hue: value
      });
    });

    return _this;
  }

  _createClass(Hue, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          palette = _this$props.palette,
          saturation = _this$props.saturation,
          lightness = _this$props.lightness,
          setPalette = _this$props.setPalette,
          hsl = _this$props.hsl,
          props = _objectWithoutProperties(_this$props, ["color", "palette", "saturation", "lightness", "setPalette", "hsl"]);

      var Slider = react_color_sliders__WEBPACK_IMPORTED_MODULE_1__["".concat(color[0].toUpperCase()).concat(color.slice(1), "HueSlider")];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, color), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Slider, {
        hue: palette[color].hue,
        saturation: saturation,
        lightness: lightness,
        onUpdate: this.setValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }));
    }
  }]);

  return Hue;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

var columnClass = 'col-lg-2 col-md-3 col-6';

var Lightness =
/*#__PURE__*/
function (_React$PureComponent2) {
  _inherits(Lightness, _React$PureComponent2);

  function Lightness() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, Lightness);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(Lightness)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "setValue", function (value) {
      return _this2.props.setLightness(_this2.props.kind, {
        lightness: value
      });
    });

    return _this2;
  }

  _createClass(Lightness, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          palette = _this$props2.palette,
          kind = _this$props2.kind,
          saturation = _this$props2.saturation,
          lightness = _this$props2.lightness,
          setLightness = _this$props2.setLightness,
          hsl = _this$props2.hsl,
          props = _objectWithoutProperties(_this$props2, ["palette", "kind", "saturation", "lightness", "setLightness", "hsl"]);

      var Slider = react_color_sliders__WEBPACK_IMPORTED_MODULE_1__["".concat(kind[0].toUpperCase()).concat(kind.slice(1), "LightnessSlider")];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'mb-4',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, kind), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Slider, {
        saturation: saturation,
        hue: 0,
        lightness: lightness,
        onUpdate: this.setValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), Object.keys(palette).map(function (color) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: color + kind,
          className: " mb-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "rounded shadow-sm",
          style: {
            height: 64,
            background: "linear-gradient(to bottom,\n                ".concat(hsl(color, kind), ",\n                ").concat(hsl(color, kind), ")")
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }));
      }));
    }
  }]);

  return Lightness;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

var App =
/*#__PURE__*/
function (_React$PureComponent3) {
  _inherits(App, _React$PureComponent3);

  function App() {
    var _getPrototypeOf4;

    var _this3;

    _classCallCheck(this, App);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(App)).call.apply(_getPrototypeOf4, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {
      palette: {
        red: {
          hue: 348
        },
        orange: {
          hue: 30
        },
        yellow: {
          hue: 55
        },
        green: {
          hue: 134
        },
        cyan: {
          hue: 187
        },
        blue: {
          hue: 237
        },
        magenta: {
          hue: 295
        }
      },
      saturation: 100,
      tint: {
        lightness: 75
      },
      tone: {
        lightness: 50
      },
      shade: {
        lightness: 25
      },
      exportType: 'css'
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "hsl", function (color, kind) {
      return "hsl(".concat(_this3.state.palette[color].hue, ", ").concat(_this3.state.saturation, "%, ").concat(_this3.state[kind].lightness, "%)");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "setPalette", function (color, value) {
      _this3.setState({
        palette: _objectSpread({}, _this3.state.palette, _defineProperty({}, color, value))
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "setLightness", function (kind, value) {
      _this3.setState(_defineProperty({}, kind, _objectSpread({}, _this3.state[kind], value)));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "setSaturation", function (value) {
      _this3.setState({
        saturation: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "setExportType", function (type) {
      _this3.setState({
        exportType: type
      });
    });

    return _this3;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "position-relative overflow-x-hidden ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "py-5 container position-relative z-index-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "display-4 mb-4 text-center  ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "Make a color palette"), " in an intuitive way"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "row mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: columnClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Saturation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_color_sliders__WEBPACK_IMPORTED_MODULE_1__["SaturationSlider"], {
        hue: 0,
        saturation: this.state.saturation,
        lightness: 50,
        onUpdate: this.setSaturation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      })), Object.keys(this.state.palette).map(function (color) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hue, {
          className: 'mt-4',
          style: {
            marginBottom: 42
          },
          key: color,
          name: color,
          palette: _this4.state.palette,
          color: color,
          lightness: _this4.state.tone.lightness,
          saturation: _this4.state.saturation,
          setPalette: _this4.setPalette,
          hsl: _this4.hsl,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        });
      })), _consts__WEBPACK_IMPORTED_MODULE_3__["lightnessLevels"].map(function (kind) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Lightness, {
          kind: kind,
          key: kind,
          lightness: _this4.state[kind].lightness,
          saturation: _this4.state.saturation,
          setLightness: _this4.setLightness,
          palette: _this4.state.palette,
          hsl: _this4.hsl,
          className: columnClass,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "col-lg-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "lead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "How this works:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "You adjust the base color per row"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, "Change lightness per column"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "Set color intensity across all colors using the saturation slider"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Export your colors in SASS, JSON or CSS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-justify",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "This app is built using React. Source code is available on", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://github.com/Hermanya/palette/tree/master/example",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "GitHub"), '. ', "All sliders used on this page are published on npm as ", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("var", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, "react-color-sliders"), ",", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://github.com/Hermanya/palette/blob/master/README.md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "see documentation"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex align-items-center mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "MIT \xA9", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://hermanya.github.io",
        className: "ml-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "Herman Starikov"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        style: {
          width: 32,
          height: 32
        },
        className: "d-inline-block ml-2 rounded shadow-sm",
        alt: "Herman Starikov",
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1589206/profile/profile-512.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://twitter.com/hermanhasawish",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-twitter ml-2",
        style: {
          color: 'rgb(75,	160,	235	)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, "Link to Herman's twitter profile")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://github.com/hermanya",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fab fa-github ml-2",
        style: {
          color: 'black'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, "Link to Herman's github profile"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Code__WEBPACK_IMPORTED_MODULE_2__["Code"], {
        exportType: this.state.exportType,
        palette: this.state.palette,
        setExportType: this.setExportType,
        hsl: this.hsl,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-palette position-absolute text-light z-index-1",
        style: {
          top: '-5vw',
          right: '-5vw',
          transform: 'rotate(-90deg)',
          fontSize: '25vw'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-swatchbook position-absolute text-light z-index-1",
        style: {
          transform: 'rotate(90deg)',
          top: '1vw',
          left: '1vw',
          fontSize: '25vw'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);



/***/ })

})
//# sourceMappingURL=index.js.f9099aa4169ddae3ccd8.hot-update.js.map