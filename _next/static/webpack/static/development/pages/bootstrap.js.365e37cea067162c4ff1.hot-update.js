webpackHotUpdate("static/development/pages/bootstrap.js",{

/***/ "./pages/bootstrap.js":
/*!****************************!*\
  !*** ./pages/bootstrap.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/index.scss */ "./components/index.scss");
/* harmony import */ var _components_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
var _jsxFileName = "/Users/herman/my/react-color-sliders/example/pages/bootstrap.js";





var Page = function Page() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "Description",
    content: "Make a color palette in an intuitive way",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Make a bootstrap color palette")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
    libraryName: "Bootstrap",
    libraryColor: "#563d7c",
    initialState: {
      hues: [{
        name: "blue",
        value: 211
      }, // hsl(211°, 100%, 50%)
      {
        name: "indigo",
        value: 253
      }, // hsl(263°, 90%, 51%)
      {
        name: "purple",
        value: 271
      }, // hsl(261°, 51%, 51%)
      {
        name: "pink",
        value: 332
      }, // hsl(332°, 79%, 58%)
      {
        name: "red",
        value: 354
      }, // hsl(354°, 70%, 54%)
      {
        name: "orange",
        value: 27
      }, // hsl(27°, 98%, 54%)
      {
        name: "yellow",
        value: 45
      }, // hsl(45°, 100%, 51%)
      {
        name: "green",
        value: 134
      }, // hsl(134°, 61%, 41%)
      {
        name: "teal",
        value: 162
      }, // hsl(162°, 73%, 46%)
      {
        name: "cyan",
        value: 188 // hsl(188°, 78%, 41%)

      }],
      lightnesses: [{
        name: "tone",
        value: 50,
        domain: [25, 75]
      }],
      saturation: 80
    },
    exportTypes: [{
      name: "SASS",
      toString: function toString(_ref) {
        var hues = _ref.hues,
            lightnesses = _ref.lightnesses,
            saturation = _ref.saturation,
            hsl = _ref.hsl;
        return hues.map(function (hue) {
          return "$".concat(hue.name, ": ").concat(hsl(hue.name, "tone"), ";");
        }).join("\n") + "\n\n$primary:       $blue;\n$secondary:     $gray-600;\n$success:       $green;\n$info:          $cyan;\n$warning:       $yellow;\n$danger:        $red;\n            ";
      }
    }],
    columnClass: "col-lg-4 col-md-3 col-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/bootstrap")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=bootstrap.js.365e37cea067162c4ff1.hot-update.js.map