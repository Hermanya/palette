webpackHotUpdate("static/development/pages/tailwind.js",{

/***/ "./pages/tailwind.js":
/*!***************************!*\
  !*** ./pages/tailwind.js ***!
  \***************************/
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
var _jsxFileName = "/Users/herman/my/react-color-sliders/example/pages/tailwind.js";





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
    content: "Make a tailwind color palette in an intuitive way",
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
  }, "Make a tailwind color palette")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
    library: "Tailwind",
    libraryColor: "#42a6b2",
    initialState: {
      hues: [{
        name: "red",
        value: 2
      }, // hsl(2°, 76%, 54%)
      {
        name: "orange",
        value: 30
      }, // hsl(30°, 91%, 61%)
      {
        name: "yellow",
        value: 54
      }, // hsl(54°, 100%, 65%)
      {
        name: "green",
        value: 145
      }, // hsl(145°, 55%, 49%)
      {
        name: "teal",
        value: 174
      }, // hsl(174°, 48%, 53%)
      {
        name: "blue",
        value: 207
      }, // hsl(207°, 71%, 53%)
      {
        name: "indigo",
        value: 231
      }, // hsl(231°, 51%, 60%)
      {
        name: "purple",
        value: 264
      }, // hsl(264°, 69%, 63%)
      {
        name: "pink",
        value: 340 // hsl(340°, 88%, 70%)

      }],
      lightnesses: ["darkest", "darker", "dark", "base", "light", "lighter", "lightest"].map(function (name, index, all) {
        var value = Math.round(25 + 75 / all.length * index);
        return {
          name: name,
          value: value,
          domain: [value - 17, value + 17]
        };
      }),
      saturation: 71,
      exportType: "JS"
    },
    exportsTypes: [{
      name: "JS",
      toString: function toString(_ref) {
        var hues = _ref.hues,
            lightnesses = _ref.lightnesses,
            saturation = _ref.saturation,
            hsl = _ref.hsl;
        return "var colors = {\n".concat(hues.map(function (hue) {
          return lightnesses.map(function (lightness) {
            return "  '".concat(hue.name, "-").concat(lightness.name, "': '").concat(hsl(hue.name, lightness.name), "'");
          }).join(",\n");
        }).join(",\n"), "\n}");
      }
    }],
    columnClass: "col-lg-1 col-md-3 col-6 p-1",
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/tailwind")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=tailwind.js.d76ee5314dc9c7adf988.hot-update.js.map