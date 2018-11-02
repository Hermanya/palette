webpackHotUpdate("static/development/pages/index.js",{

/***/ "../dist/index.es.js":
/*!***************************!*\
  !*** ../dist/index.es.js ***!
  \***************************/
/*! exports provided: HueSlider, RedHueSlider, OrangeHueSlider, YellowHueSlider, GreenHueSlider, CyanHueSlider, BlueHueSlider, MagentaHueSlider, SaturationSlider, LightnessSlider, TintLightnessSlider, ToneLightnessSlider, ShadeLightnessSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HueSlider", function() { return HueSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedHueSlider", function() { return RedHueSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrangeHueSlider", function() { return OrangeHueSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YellowHueSlider", function() { return YellowHueSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreenHueSlider", function() { return GreenHueSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CyanHueSlider", function() { return CyanHueSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueHueSlider", function() { return BlueHueSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagentaHueSlider", function() { return MagentaHueSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaturationSlider", function() { return SaturationSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightnessSlider", function() { return LightnessSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TintLightnessSlider", function() { return TintLightnessSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToneLightnessSlider", function() { return ToneLightnessSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadeLightnessSlider", function() { return ShadeLightnessSlider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

var warning_1 = warning;

var callAll = function callAll() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fns.forEach(function (fn) {
      return fn && fn.apply(undefined, args);
    });
  };
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rail = function (_Component) {
  _inherits(Rail, _Component);

  function Rail() {
    var _temp, _this, _ret;

    _classCallCheck(this, Rail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getRailProps = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props = _this.props,
          emitMouse = _this$props.emitMouse,
          emitTouch = _this$props.emitTouch;


      return _extends({}, props, {
        onMouseDown: callAll(props.onMouseDown, emitMouse),
        onTouchStart: callAll(props.onTouchStart, emitTouch)
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Rail.prototype.render = function render() {
    var getRailProps = this.getRailProps,
        children = this.props.children;


    var renderedChildren = children({ getRailProps: getRailProps });
    return renderedChildren && react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(renderedChildren);
  };

  return Rail;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Rail.propTypes = {
  /** @ignore */
  emitMouse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  /** @ignore */
  emitTouch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  /**
   * A function to render the rail. `({ getRailProps }): element`
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ticks = function (_Component) {
  _inherits$1(Ticks, _Component);

  function Ticks() {
    _classCallCheck$1(this, Ticks);

    return _possibleConstructorReturn$1(this, _Component.apply(this, arguments));
  }

  Ticks.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        values = _props.values,
        scale = _props.scale,
        count = _props.count,
        emitMouse = _props.emitMouse,
        emitTouch = _props.emitTouch;

    var ticks = (values ? values : scale.getTicks(count)).map(function (value) {
      return {
        id: '$$-' + value,
        value: value,
        percent: scale.getValue(value)
      };
    });

    var renderedChildren = children({ ticks: ticks, emitMouse: emitMouse, emitTouch: emitTouch });
    return renderedChildren && react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(renderedChildren);
  };

  return Ticks;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Ticks.propTypes = {
  /** @ignore */
  scale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  /**
   * Approximate number of ticks you want to render.
   * If you supply your own ticks using the values prop this prop has no effect.
   */
  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  /**
   * The values prop should be an array of unique numbers.
   * Use this prop if you want to specify your own tick values instead of ticks generated by the slider.
   * The numbers should be valid numbers in the domain and correspond to the step value.
   * Invalid values will be coerced to the closet matching value in the domain.
   */
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  /** @ignore */
  emitMouse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  /** @ignore */
  emitTouch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  /**
   * A function to render the ticks.
   * The function receives an object with an array of ticks.
   * `({ ticks  }): element`
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

Ticks.defaultProps = {
  count: 10
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tracks = function (_Component) {
  _inherits$2(Tracks, _Component);

  function Tracks() {
    var _temp, _this, _ret;

    _classCallCheck$2(this, Tracks);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$2(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getTrackProps = function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props = _this.props,
          emitMouse = _this$props.emitMouse,
          emitTouch = _this$props.emitTouch;


      return _extends$1({}, props, {
        onMouseDown: callAll(props.onMouseDown, emitMouse),
        onTouchStart: callAll(props.onTouchStart, emitTouch)
      });
    }, _temp), _possibleConstructorReturn$2(_this, _ret);
  }

  Tracks.prototype.render = function render() {
    var getTrackProps = this.getTrackProps,
        _props = this.props,
        children = _props.children,
        left = _props.left,
        right = _props.right,
        scale = _props.scale,
        handles = _props.handles;


    var domain = scale.getDomain();
    var tracks = [];

    for (var i = 0; i < handles.length + 1; i++) {
      var source = handles[i - 1];
      var target = handles[i];

      if (i === 0 && left === true) {
        source = { id: '$', value: domain[0], percent: 0 };
      } else if (i === handles.length && right === true) {
        target = { id: '$', value: domain[1], percent: 100 };
      }

      if (source && target) {
        tracks.push({
          id: source.id + '-' + target.id,
          source: source,
          target: target
        });
      }
    }

    var renderedChildren = children({ tracks: tracks, getTrackProps: getTrackProps });
    return renderedChildren && react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(renderedChildren);
  };

  return Tracks;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Tracks.propTypes = {
  /**
   * Boolean value to control whether the left most track is included in the tracks array.
   */
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  /**
   * Boolean value to control whether the right most track is included in the tracks array.
   */
  right: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  /** @ignore */
  scale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  /** @ignore */
  handles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  /** @ignore */
  emitMouse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  /** @ignore */
  emitTouch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  /**
   * A function to render the tracks. The function receives an object with an array of tracks and a function to get track props. `({ tracks, getTrackProps }): element`
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

Tracks.defaultProps = {
  left: true,
  right: true
};

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Handles = function (_Component) {
  _inherits$3(Handles, _Component);

  function Handles() {
    var _temp, _this, _ret;

    _classCallCheck$3(this, Handles);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$3(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.autofocus = function (e) {
      e.target.focus();
    }, _this.getHandleProps = function (id) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _this$props = _this.props,
          emitKeyboard = _this$props.emitKeyboard,
          emitMouse = _this$props.emitMouse,
          emitTouch = _this$props.emitTouch;


      return _extends$2({}, props, {
        onKeyDown: callAll(props.onKeyDown, function (e) {
          return emitKeyboard(e, id);
        }),
        onMouseDown: callAll(props.onMouseDown, _this.autofocus, function (e) {
          return emitMouse(e, id);
        }),
        onTouchStart: callAll(props.onTouchStart, function (e) {
          return emitTouch(e, id);
        })
      });
    }, _temp), _possibleConstructorReturn$3(_this, _ret);
  }

  Handles.prototype.render = function render() {
    var getHandleProps = this.getHandleProps,
        _props = this.props,
        children = _props.children,
        handles = _props.handles;


    var renderedChildren = children({ handles: handles, getHandleProps: getHandleProps });
    return renderedChildren && react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(renderedChildren);
  };

  return Handles;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Handles.propTypes = {
  /** @ignore */
  handles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  /** @ignore */
  emitKeyboard: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  /** @ignore */
  emitMouse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  /** @ignore */
  emitTouch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  /**
   * A function to render the handles.
   * The function receives an object with an array of handles and functions to get handle props
   * `({ handles, getHandleProps }): element`
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

function getSortByVal(reversed) {
  return function sortByVal(a, b) {
    if (a.val > b.val) {
      return reversed ? -1 : 1;
    }

    if (b.val > a.val) {
      return reversed ? 1 : -1;
    }

    return 0;
  };
}

function getUpdatedValues(values, updateKey, updateValue, reversed) {
  var index = values.findIndex(function (v) {
    return v.key === updateKey;
  });

  if (index !== -1) {
    var _values$index = values[index],
        key = _values$index.key,
        val = _values$index.val;


    if (val === updateValue) {
      return values;
    }

    return [].concat(values.slice(0, index), [{ key: key, val: updateValue }], values.slice(index + 1)).sort(getSortByVal(reversed));
  }

  return values;
}

function getSliderDomain(slider, vertical, scale) {
  if (!slider) {
    return [0, 0];
  }

  var s = slider.getBoundingClientRect();

  var d0 = vertical ? s.top : s.left;
  var d1 = vertical ? s.bottom : s.right;

  var k = Math.abs(d0 - d1) / scale.n / 2;

  return [d0 - k, d1 + k];
}

function precision(num) {
  var m = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);

  if (!m) {
    return 0;
  }

  return Math.max(0, (m[1] ? m[1].length : 0) - (m[2] ? +m[2] : 0));
}

function getStepRange(min, max, step) {
  var fixed = precision(step);

  var pMin = +min.toFixed(fixed);
  var pMax = +max.toFixed(fixed);

  var range = [];

  var next = pMin;

  while (next <= pMax) {
    range.push(next);
    next = +(next + step).toFixed(fixed);

    if (range.length > 1000000) {
      throw new Error('Slider range is too large.  Increase step value.');
    }
  }

  return range;
}

function isNotValidTouch(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === undefined ? '' : _ref$type,
      touches = _ref.touches;

  return !touches || touches.length > 1 || type.toLowerCase() === 'touchend' && touches.length > 0;
}

function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}

/* eslint complexity: "off", max-statements: "off", max-depth: "off" */

// default mode
function mode1(curr, next) {
  return next;
}

// prevent duplicate values and crossing
function mode2(curr, next) {
  for (var i = 0; i < curr.length; i++) {
    if (curr[i].key !== next[i].key) {
      return curr;
    }

    if (next[i + 1] && next[i].val === next[i + 1].val) {
      return curr;
    }
  }

  return next;
}

// pushable mode
function mode3(curr, next, step, reversed, getValue) {
  var indexForMovingHandle = -1;
  var handleMoveIsPositive = true;

  for (var i = 0; i < curr.length; i++) {
    var c = curr[i];
    var n = next[i];

    // make sure keys are in same order if not return curr
    if (!n || n.key !== c.key) {
      return curr;
    } else if (n.val !== c.val) {
      indexForMovingHandle = i;
      handleMoveIsPositive = n.val - c.val > 0;
    }
  }

  // nothing has changed (shouldn't happen but just in case).
  if (indexForMovingHandle === -1) {
    return curr;
  } else {
    var increment = handleMoveIsPositive ? step : -step;

    for (var _i = 0; _i < next.length; _i++) {
      var n0 = next[_i];
      var n1 = next[_i + 1];

      if (n1 && n0.val === n1.val) {
        if (_i === indexForMovingHandle) {
          var newStep = n1.val + increment;
          if (getValue(newStep) === newStep) {
            var clone = getUpdatedValues(next, n1.key, n1.val + increment, reversed);
            var check = mode3(next, clone, step, reversed, getValue);

            if (check === next) {
              return curr;
            } else {
              return check;
            }
          } else {
            return curr;
          }
        } else {
          var _newStep = n0.val + increment;
          if (getValue(_newStep) === _newStep) {
            var _clone = getUpdatedValues(next, n0.key, n0.val + increment, reversed);
            var _check = mode3(next, _clone, step, reversed, getValue);

            if (_check === next) {
              return curr;
            } else {
              return _check;
            }
          } else {
            return curr;
          }
        }
      }
    }
  }

  return next;
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function bisector(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
}

function ascendingComparator(f) {
  return function(d, x) {
    return ascending(f(d), x);
  };
}

var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;

var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

function ticks(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
}

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinearScale = function () {
  function LinearScale() {
    _classCallCheck$4(this, LinearScale);

    this.domain = [0, 1];
    this.range = [0, 1];
    this.interpolator = null;
  }

  LinearScale.prototype.createInterpolator = function createInterpolator(domain, range$$1) {
    var d0 = domain[0];
    var d1 = domain[1];

    var r0 = range$$1[0];
    var r1 = range$$1[1];

    if (d1 < d0) {
      d0 = this.deinterpolateValue(d1, d0);
      r0 = this.interpolateValue(r1, r0);
    } else {
      d0 = this.deinterpolateValue(d0, d1);
      r0 = this.interpolateValue(r0, r1);
    }

    return function (x) {
      return r0(d0(x));
    };
  };

  LinearScale.prototype.interpolateValue = function interpolateValue(a, b) {
    return a = +a, b -= a, function i(t) {
      return a + b * t;
    };
  };

  LinearScale.prototype.deinterpolateValue = function deinterpolateValue(a, b) {
    return (b -= a = +a) ? function (x) {
      return (x - a) / b;
    } : function () {
      return b;
    }; // eslint-disable-line
  };

  LinearScale.prototype.rescale = function rescale() {
    this.interpolator = null;
    return this;
  };

  LinearScale.prototype.getValue = function getValue(x) {
    var domain = this.domain,
        range$$1 = this.range;

    return (this.interpolator || (this.interpolator = this.createInterpolator(domain, range$$1)))(+x);
  };

  LinearScale.prototype.setDomain = function setDomain(val) {
    this.domain = val.map(function (d) {
      return +d;
    });
    this.rescale();

    return this;
  };

  LinearScale.prototype.getDomain = function getDomain() {
    return this.domain;
  };

  LinearScale.prototype.setRange = function setRange(val) {
    this.range = val.map(function (d) {
      return +d;
    });

    return this;
  };

  LinearScale.prototype.getTicks = function getTicks(count) {
    var d = this.domain;
    return ticks(d[0], d[d.length - 1], count ? count : 10);
  };

  return LinearScale;
}();

function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DiscreteScale = function () {
  function DiscreteScale() {
    var _this = this;

    _classCallCheck$5(this, DiscreteScale);

    this.getValue = function (x) {
      var range$$1 = _this.range,
          domain = _this.domain,
          n = _this.n;

      return range$$1[bisectRight(domain, x, 0, n)];
    };

    this.setDomain = function (val) {
      _this.x0 = +val[0];
      _this.x1 = +val[1];
      _this.rescale();

      return _this;
    };

    this.setRange = function (val) {
      _this.range = val.slice();
      _this.n = _this.range.length - 1;

      return _this;
    };

    this.x0 = 0;
    this.x1 = 1;

    this.domain = [0.5];
    this.range = [0, 1];

    this.n = 1;
  }

  DiscreteScale.prototype.rescale = function rescale() {
    var x0 = this.x0,
        x1 = this.x1,
        n = this.n;


    var i = -1;

    this.domain = new Array(n);

    while (++i < n) {
      this.domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    }
  };

  return DiscreteScale;
}();

function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$4(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var prfx = 'react-compound-slider:';

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var noop = function noop() {};

var compare = function compare(b) {
  return function (m, d, i) {
    return m && b[i] === d;
  };
};

var equal = function equal(a, b) {
  return a === b || a.length === b.length && a.reduce(compare(b), true);
};

var getNextValue = function getNextValue(curr, step, domain, reversed) {
  var newVal = curr;
  newVal = reversed ? curr - step : curr + step;
  return reversed ? Math.max(domain[0], newVal) : Math.min(domain[1], newVal);
};

var getPrevValue = function getPrevValue(curr, step, domain, reversed) {
  var newVal = curr;
  newVal = reversed ? curr + step : curr - step;
  return reversed ? Math.min(domain[1], newVal) : Math.max(domain[0], newVal);
};

var Slider = function (_PureComponent) {
  _inherits$4(Slider, _PureComponent);

  function Slider(props) {
    _classCallCheck$6(this, Slider);

    var _this = _possibleConstructorReturn$4(this, _PureComponent.call(this, props));

    _this.state = { values: [] };

    _this.slider = null;

    _this.valueToPerc = new LinearScale();
    _this.valueToStep = new DiscreteScale();
    _this.pixelToStep = new DiscreteScale();

    _this.onMouseMove = _this.onMouseMove.bind(_this);
    _this.onTouchMove = _this.onTouchMove.bind(_this);
    _this.submitUpdate = _this.submitUpdate.bind(_this);

    _this.onMouseDown = _this.onMouseDown.bind(_this);
    _this.onTouchStart = _this.onTouchStart.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.onStart = _this.onStart.bind(_this);

    _this.onMouseUp = _this.onMouseUp.bind(_this);
    _this.onTouchEnd = _this.onTouchEnd.bind(_this);
    return _this;
  }

  Slider.prototype.componentWillMount = function componentWillMount() {
    var _props = this.props,
        values = _props.values,
        domain = _props.domain,
        step = _props.step,
        reversed = _props.reversed;


    this.updateRange(domain, step, reversed);
    this.setValues(values, reversed);
  };

  Slider.prototype.componentWillReceiveProps = function componentWillReceiveProps(next) {
    var domain = next.domain,
        step = next.step,
        reversed = next.reversed,
        values = next.values;
    var props = this.props;


    if (domain[0] !== props.domain[0] || domain[1] !== props.domain[1] || step !== props.step || reversed !== props.reversed) {
      this.updateRange(domain, step, reversed);
      // after adjusting the range based on the changed domain or step, make sure to update the values
      // to fit with the new range
      var remapped = this.reMapValues(reversed, values);

      if (values === undefined || values === props.values) {
        next.onChange(remapped);
        next.onUpdate(remapped);
      }
    } else if (!equal(values, props.values)) {
      // if domain didnt change, but the value props did, set the values
      this.setValues(values, reversed);
    }
  };

  Slider.prototype.componentWillUnmount = function componentWillUnmount() {
    this.removeListeners();
  };

  Slider.prototype.removeListeners = function removeListeners() {
    if (isBrowser) {
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('mouseup', this.onMouseUp);
      document.removeEventListener('touchmove', this.onTouchMove);
      document.removeEventListener('touchend', this.onTouchEnd);
    }
  };

  Slider.prototype.reMapValues = function reMapValues(reversed, values) {
    // if values was not passed, fall back to using state
    return this.setValues(values || this.state.values.map(function (d) {
      return d.val;
    }), reversed);
  };

  Slider.prototype.setValues = function setValues() {
    var _this2 = this;

    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var reversed = arguments[1];

    var changes = 0;

    var values = arr.map(function (x) {
      var val = _this2.valueToStep.getValue(x);

      if (x !== val) {
        changes += 1;
        warning_1(false, prfx + ' Invalid value encountered. Changing ' + x + ' to ' + val + '.');
      }

      return val;
    }).map(function (val, i) {
      return { key: '$$-' + i, val: val };
    }).sort(getSortByVal(reversed));

    var valuesArr = values.map(function (d) {
      return d.val;
    });

    if (changes > 0) {
      this.props.onUpdate(valuesArr);
      this.props.onChange(valuesArr);
    }

    this.setState(function () {
      return { values: values };
    });

    return valuesArr;
  };

  Slider.prototype.updateRange = function updateRange(_ref, step, reversed) {
    var min = _ref[0],
        max = _ref[1];

    var range = getStepRange(min, max, step);

    this.valueToStep.setRange(range).setDomain([min - step / 2, max + step / 2]);

    if (reversed === true) {
      this.valueToPerc.setDomain([min, max]).setRange([100, 0]);
      range.reverse();
    } else {
      this.valueToPerc.setDomain([min, max]).setRange([0, 100]);
    }

    this.pixelToStep.setRange(range);

    warning_1(max > min, prfx + ' Max must be greater than min (even if reversed). Max is ' + max + '. Min is ' + min + '.');

    var maxInRange = 100001;

    warning_1(range.length <= maxInRange, prfx + ' Increase step value (set to ' + step + ' currently). Found ' + range.length.toLocaleString() + ' values in range. Max is ' + maxInRange.toLocaleString() + '.');

    var last = range.length - 1;

    warning_1(range[reversed ? last : 0] === min && range[reversed ? 0 : last] === max, prfx + ' The range is incorrectly calculated. Check domain (min, max) and step values.');
  };

  Slider.prototype.onKeyDown = function onKeyDown(e, handleID) {
    var validUpKeys = ['ArrowRight', 'ArrowUp'];
    var validDownKeys = ['ArrowDown', 'ArrowLeft'];
    var values = this.state.values,
        _props2 = this.props,
        step = _props2.step,
        reversed = _props2.reversed,
        vertical = _props2.vertical,
        domain = _props2.domain;

    var key = e.key || e.keyCode;

    if (!validUpKeys.concat(validDownKeys).includes(key)) {
      return;
    }

    if (vertical) {
      var _ref2 = [validDownKeys, validUpKeys];
      validUpKeys = _ref2[0];
      validDownKeys = _ref2[1];
    }

    e.stopPropagation && e.stopPropagation();
    e.preventDefault && e.preventDefault();

    var found = values.find(function (value) {
      return value.key === handleID;
    });
    if (!found) {
      return;
    }

    var currVal = found.val;
    var newVal = currVal;

    if (validUpKeys.includes(key)) {
      newVal = getNextValue(currVal, step, domain, reversed);
    } else if (validDownKeys.includes(key)) {
      newVal = getPrevValue(currVal, step, domain, reversed);
    }
    var nextValues = values.map(function (v) {
      return v.key === handleID ? { key: v.key, val: newVal } : v;
    });

    this.submitUpdate(nextValues, true);
  };

  Slider.prototype.onMouseDown = function onMouseDown(e, handleID) {
    this.onStart(e, handleID, false);
  };

  Slider.prototype.onTouchStart = function onTouchStart(e, handleID) {
    if (isNotValidTouch(e)) {
      return;
    }

    this.onStart(e, handleID, true);
  };

  Slider.prototype.onStart = function onStart(e, handleID, isTouch) {
    var values = this.state.values,
        onSlideStart = this.props.onSlideStart;


    e.stopPropagation && e.stopPropagation();
    e.preventDefault && e.preventDefault();

    var found = values.find(function (value) {
      return value.key === handleID;
    });

    if (found) {
      this.active = handleID;
      onSlideStart(values.map(function (d) {
        return d.val;
      }), { activeHandleID: handleID });
      isTouch ? this.addTouchEvents() : this.addMouseEvents();
    } else {
      this.active = null;
      this.handleRailAndTrackClicks(e, isTouch);
    }
  };

  Slider.prototype.handleRailAndTrackClicks = function handleRailAndTrackClicks(e, isTouch) {
    var curr = this.state.values,
        _props3 = this.props,
        vertical = _props3.vertical,
        reversed = _props3.reversed;
    var slider = this.slider;

    // double check the dimensions of the slider

    this.pixelToStep.setDomain(getSliderDomain(slider, vertical, this.pixelToStep));

    // find the closest value (aka step) to the event location
    var updateValue = void 0;

    if (isTouch) {
      updateValue = this.pixelToStep.getValue(getTouchPosition(vertical, e));
    } else {
      updateValue = this.pixelToStep.getValue(vertical ? e.clientY : e.pageX);
    }

    // find the closest handle key
    var updateKey = null;
    var minDiff = Infinity;

    for (var i = 0; i < curr.length; i++) {
      var _curr$i = curr[i],
          key = _curr$i.key,
          val = _curr$i.val;

      var diff = Math.abs(val - updateValue);

      if (diff < minDiff) {
        updateKey = key;
        minDiff = diff;
      }
    }

    // generate a "candidate" set of values - a suggestion of what to do
    var nextValues = getUpdatedValues(curr, updateKey, updateValue, reversed);

    // submit the candidate values
    this.submitUpdate(nextValues, true);
  };

  Slider.prototype.addMouseEvents = function addMouseEvents() {
    if (isBrowser) {
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mouseup', this.onMouseUp);
    }
  };

  Slider.prototype.addTouchEvents = function addTouchEvents() {
    if (isBrowser) {
      document.addEventListener('touchmove', this.onTouchMove);
      document.addEventListener('touchend', this.onTouchEnd);
    }
  };

  Slider.prototype.onMouseMove = function onMouseMove(e) {
    var curr = this.state.values,
        _props4 = this.props,
        vertical = _props4.vertical,
        reversed = _props4.reversed;
    var updateKey = this.active,
        slider = this.slider;

    // double check the dimensions of the slider

    this.pixelToStep.setDomain(getSliderDomain(slider, vertical, this.pixelToStep));

    // find the closest value (aka step) to the event location
    var updateValue = this.pixelToStep.getValue(vertical ? e.clientY : e.pageX);

    // generate a "candidate" set of values - a suggestion of what to do
    var nextValues = getUpdatedValues(curr, updateKey, updateValue, reversed);

    // submit the candidate values
    this.submitUpdate(nextValues);
  };

  Slider.prototype.onTouchMove = function onTouchMove(e) {
    var curr = this.state.values,
        _props5 = this.props,
        vertical = _props5.vertical,
        reversed = _props5.reversed;
    var updateKey = this.active,
        slider = this.slider;


    if (isNotValidTouch(e)) {
      return;
    }

    // double check the dimensions of the slider
    this.pixelToStep.setDomain(getSliderDomain(slider, vertical, this.pixelToStep));

    // find the closest value (aka step) to the event location
    var updateValue = this.pixelToStep.getValue(getTouchPosition(vertical, e));

    // generate a "candidate" set of values - a suggestion of what to do
    var nextValues = getUpdatedValues(curr, updateKey, updateValue, reversed);

    // submit the candidate values
    this.submitUpdate(nextValues);
  };

  Slider.prototype.submitUpdate = function submitUpdate(next, callOnChange) {
    var _props6 = this.props,
        mode = _props6.mode,
        step = _props6.step,
        onUpdate = _props6.onUpdate,
        onChange = _props6.onChange,
        reversed = _props6.reversed;
    var getValue = this.valueToStep.getValue;


    this.setState(function (_ref3) {
      var curr = _ref3.values;

      var values = void 0;

      // given the current values and a candidate set, decide what to do
      if (typeof mode === 'function') {
        values = mode(curr, next, step, reversed, getValue);
        warning_1(Array.isArray(values), 'Custom mode function did not return an array.');
      } else {
        switch (mode) {
          case 1:
            values = mode1(curr, next);
            break;
          case 2:
            values = mode2(curr, next);
            break;
          case 3:
            values = mode3(curr, next, step, reversed, getValue);
            break;
          default:
            values = next;
            warning_1(false, prfx + ' Invalid mode value.');
        }
      }

      onUpdate(values.map(function (d) {
        return d.val;
      }));

      if (callOnChange) {
        onChange(values.map(function (d) {
          return d.val;
        }));
      }

      return { values: values };
    });
  };

  Slider.prototype.onMouseUp = function onMouseUp() {
    var values = this.state.values,
        _props7 = this.props,
        onChange = _props7.onChange,
        onSlideEnd = _props7.onSlideEnd;

    var activeHandleID = this.active;
    this.active = null;

    onChange(values.map(function (d) {
      return d.val;
    }));
    onSlideEnd(values.map(function (d) {
      return d.val;
    }), { activeHandleID: activeHandleID });

    if (isBrowser) {
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('mouseup', this.onMouseUp);
    }
  };

  Slider.prototype.onTouchEnd = function onTouchEnd() {
    var values = this.state.values,
        _props8 = this.props,
        onChange = _props8.onChange,
        onSlideEnd = _props8.onSlideEnd;

    this.active = null;

    onChange(values.map(function (d) {
      return d.val;
    }));
    onSlideEnd(values.map(function (d) {
      return d.val;
    }));

    if (isBrowser) {
      document.removeEventListener('touchmove', this.onTouchMove);
      document.removeEventListener('touchend', this.onTouchEnd);
    }
  };

  Slider.prototype.render = function render() {
    var _this3 = this;

    var values = this.state.values,
        _props9 = this.props,
        className = _props9.className,
        rootStyle = _props9.rootStyle;


    var handles = values.map(function (_ref4) {
      var key = _ref4.key,
          val = _ref4.val;

      return { id: key, value: val, percent: _this3.valueToPerc.getValue(val) };
    });

    var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(this.props.children, function (child) {
      if (child.type.name === Rail.name || child.type.name === Ticks.name || child.type.name === Tracks.name || child.type.name === Handles.name) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
          scale: _this3.valueToPerc,
          handles: handles,
          emitKeyboard: _this3.onKeyDown,
          emitMouse: _this3.onMouseDown,
          emitTouch: _this3.onTouchStart
        });
      }

      return child;
    });

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'div',
      {
        style: rootStyle || {},
        className: className,
        ref: function ref(d) {
          return _this3.slider = d;
        }
      },
      children
    );
  };

  return Slider;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

Slider.propTypes = {
  /**
   * CSS class name applied to the root div of the slider.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  /**
   * An object with any inline styles you want applied to the root div.
   */
  rootStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  /**
   * Two element array of numbers providing the min and max values for the slider [min, max] e.g. [0, 100].
   * It does not matter if the slider is reversed on the screen, domain is always [min, max] with min < max.
   */
  domain: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  /**
   * An array of numbers. You can supply one for a value slider, two for a range slider or more to create n-handled sliders.
   * The values should correspond to valid step values in the domain.
   * The numbers will be forced into the domain if they are two small or large.
   */
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  /**
   * The step value for the slider.
   */
  step: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  /**
   * The interaction mode. Value of 1 will allow handles to cross each other.
   * Value of 2 will keep the sliders from crossing and separated by a step.
   * Value of 3 will make the handles pushable and keep them a step apart.
   * ADVANCED: You can also supply a function that will be passed the current values and the incoming update.
   * Your function should return what the state should be set as.
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
  /**
   * Set to true if the slider is displayed vertically to tell the slider to use the height to calculate positions.
   */
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  /**
   * Reverse the display of slider values.
   */
  reversed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  /**
   * Function triggered when the value of the slider has changed. This will recieve changes at the end of a slide as well as changes from clicks on rails and tracks. Receives values.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  /**
   * Function called with the values at each update (caution: high-volume updates when dragging). Receives values.
   */
  onUpdate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  /**
   * Function triggered with ontouchstart or onmousedown on a handle. Receives values.
   */
  onSlideStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  /**
   * Function triggered on ontouchend or onmouseup on a handle. Receives values.
   */
  onSlideEnd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  /**
   * Component children to render
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

Slider.defaultProps = {
  mode: 1,
  step: 0.1,
  domain: [0, 100],
  vertical: false,
  reversed: false,
  onChange: noop,
  onUpdate: noop,
  onSlideStart: noop,
  onSlideEnd: noop
};

Slider.Rail = Rail;
Slider.Ticks = Ticks;
Slider.Tracks = Tracks;
Slider.Handles = Handles;

var size = 30;
var Handle = function (_a) {
    var Comp = _a.divOrButton, _b = _a.domain, min = _b[0], max = _b[1], _c = _a.handle, id = _c.id, value = _c.value, percent = _c.percent, name = _a.name, getHandleProps = _a.getHandleProps;
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Comp, __assign({ role: "slider", "aria-valuemin": min, "aria-valuemax": max, "aria-valuenow": value, name: name, title: name, style: {
            left: percent + "%",
            position: 'absolute',
            transform: 'translate3d(-50%,-50%,0)',
            top: '50%',
            zIndex: 2,
            width: size,
            height: size,
            cursor: 'pointer',
            borderRadius: '50%',
            border: 'none',
            boxShadow: '0 4px 8px rgba(0,0,0,.16)',
            backgroundColor: 'white'
        } }, getHandleProps(id))));
};
var MyRail = function (_a) {
    var background = _a.background, props = __rest(_a, ["background"]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", __assign({ style: {
            background: background,
            height: 14,
            borderRadius: 7,
            cursor: 'pointer',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,.4)'
        } }, props)));
};

var HslSlider = /** @class */ (function (_super) {
    __extends(HslSlider, _super);
    function HslSlider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function (_a) {
            var value = _a[0];
            if (_this.props.onChange) {
                _this.props.onChange(value);
            }
        };
        _this.onUpdate = function (_a) {
            var value = _a[0];
            if (_this.props.onUpdate) {
                _this.props.onUpdate(value);
            }
        };
        _this.value = function () { return _this.props.domain[0]; };
        _this.background = function () { return 'black'; };
        return _this;
    }
    HslSlider.prototype.render = function () {
        var _this = this;
        var _a = this.props, domain = _a.domain, onChange = _a.onChange, onUpdate = _a.onUpdate, name = _a.name, otherProps = __rest(_a, ["domain", "onChange", "onUpdate", "name"]);
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Slider, __assign({ mode: 1, step: 1, domain: domain, rootStyle: { position: 'relative' }, onChange: this.onChange, onUpdate: this.onUpdate, values: [this.value()] }, otherProps),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Rail, null, function (_a) {
                var getRailProps = _a.getRailProps;
                return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MyRail, __assign({ background: _this.background() }, getRailProps())));
            }),
            Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Handles, null, function (_a) {
                var handles = _a.handles, getHandleProps = _a.getHandleProps;
                return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, handles.map(function (handle) { return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Handle, { divOrButton: "button", name: name, key: handle.id, handle: handle, domain: domain, getHandleProps: getHandleProps })); })));
            })));
    };
    return HslSlider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
var HueSlider = /** @class */ (function (_super) {
    __extends(HueSlider, _super);
    function HueSlider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = function () { return _this.props.hue || _this.props.domain[0]; };
        _this.background = function () {
            var _a = _this.props, saturation = _a.saturation, lightness = _a.lightness, _b = _a.domain, min = _b[0], max = _b[1];
            return "linear-gradient(to right, " + new Array(10)
                .fill(1)
                .map(function (_, i, a) {
                return "hsl(" + (min +
                    ((max - min) / a.length) * i) + ", " + saturation + "%, " + lightness + "%)";
            })
                .join(', ') + ")";
        };
        return _this;
    }
    HueSlider.defaultProps = {
        domain: [0, 360]
    };
    return HueSlider;
}(HslSlider));
var RedHueSlider = /** @class */ (function (_super) {
    __extends(RedHueSlider, _super);
    function RedHueSlider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = function () {
            return _this.props.hue > _this.props.domain[1]
                ? _this.props.hue - 360
                : _this.props.hue;
        };
        _this.onChange = function (_a) {
            var value = _a[0];
            if (_this.props.onChange) {
                _this.props.onChange(value < 0 ? 360 + value : value);
            }
        };
        _this.onUpdate = function (_a) {
            var value = _a[0];
            if (_this.props.onUpdate) {
                _this.props.onUpdate(value < 0 ? 360 + value : value);
            }
        };
        return _this;
    }
    RedHueSlider.defaultProps = {
        domain: [-30, 30]
    };
    return RedHueSlider;
}(HueSlider));
var OrangeHueSlider = /** @class */ (function (_super) {
    __extends(OrangeHueSlider, _super);
    function OrangeHueSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrangeHueSlider.defaultProps = {
        domain: [15, 45]
    };
    return OrangeHueSlider;
}(HueSlider));
var YellowHueSlider = /** @class */ (function (_super) {
    __extends(YellowHueSlider, _super);
    function YellowHueSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YellowHueSlider.defaultProps = {
        domain: [45, 75]
    };
    return YellowHueSlider;
}(HueSlider));
var GreenHueSlider = /** @class */ (function (_super) {
    __extends(GreenHueSlider, _super);
    function GreenHueSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GreenHueSlider.defaultProps = {
        domain: [70, 150]
    };
    return GreenHueSlider;
}(HueSlider));
var CyanHueSlider = /** @class */ (function (_super) {
    __extends(CyanHueSlider, _super);
    function CyanHueSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CyanHueSlider.defaultProps = {
        domain: [160, 200]
    };
    return CyanHueSlider;
}(HueSlider));
var BlueHueSlider = /** @class */ (function (_super) {
    __extends(BlueHueSlider, _super);
    function BlueHueSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlueHueSlider.defaultProps = {
        domain: [200, 280]
    };
    return BlueHueSlider;
}(HueSlider));
var MagentaHueSlider = /** @class */ (function (_super) {
    __extends(MagentaHueSlider, _super);
    function MagentaHueSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MagentaHueSlider.defaultProps = {
        domain: [260, 330]
    };
    return MagentaHueSlider;
}(HueSlider));
var SaturationSlider = /** @class */ (function (_super) {
    __extends(SaturationSlider, _super);
    function SaturationSlider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = function () { return _this.props.saturation; };
        _this.background = function () {
            var _a = _this.props, hue = _a.hue, lightness = _a.lightness;
            return "linear-gradient(to right, " + new Array(10)
                .fill(1)
                .map(function (_, i) { return "hsl(" + hue + ", " + i * 10 + "%, " + lightness + "%)"; })
                .join(', ') + ")";
        };
        return _this;
    }
    SaturationSlider.defaultProps = {
        domain: [0, 100]
    };
    return SaturationSlider;
}(HslSlider));
var LightnessSlider = /** @class */ (function (_super) {
    __extends(LightnessSlider, _super);
    function LightnessSlider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = function () { return _this.props.lightness; };
        _this.background = function () {
            var _a = _this.props, hue = _a.hue, _b = _a.domain, min = _b[0], max = _b[1];
            return "linear-gradient(to right, " + new Array(10)
                .fill(1)
                .map(function (_, i, a) { return "hsl(" + hue + ", 0%, " + (min + ((max - min) / a.length) * i) + "%)"; })
                .join(', ') + ")";
        };
        return _this;
    }
    LightnessSlider.defaultProps = {
        domain: [0, 100]
    };
    return LightnessSlider;
}(HslSlider));
var TintLightnessSlider = /** @class */ (function (_super) {
    __extends(TintLightnessSlider, _super);
    function TintLightnessSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TintLightnessSlider.defaultProps = {
        domain: [66, 100]
    };
    return TintLightnessSlider;
}(LightnessSlider));
var ToneLightnessSlider = /** @class */ (function (_super) {
    __extends(ToneLightnessSlider, _super);
    function ToneLightnessSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToneLightnessSlider.defaultProps = {
        domain: [33, 66]
    };
    return ToneLightnessSlider;
}(LightnessSlider));
var ShadeLightnessSlider = /** @class */ (function (_super) {
    __extends(ShadeLightnessSlider, _super);
    function ShadeLightnessSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShadeLightnessSlider.defaultProps = {
        domain: [0, 33]
    };
    return ShadeLightnessSlider;
}(LightnessSlider));


//# sourceMappingURL=index.es.js.map


/***/ })

})
//# sourceMappingURL=index.js.10c15631cf09432bf95c.hot-update.js.map