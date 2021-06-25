"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _reactLeaflet = require("react-leaflet");

var _shpjs = _interopRequireDefault(require("shpjs"));

var _excluded = ["data"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ShapeFile(props) {
  var _useState = (0, _react.useState)(null),
      geoJSONData = _useState[0],
      setGeoJSONData = _useState[1];

  var data = props.data,
      geoJSONProps = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  (0, _react.useEffect)(function () {
    props.data.onload = function (buffer) {
      (0, _shpjs.default)(buffer.target.result).then(function (dataConverted) {
        setGeoJSONData(dataConverted);
      });
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", null, geoJSONData !== null ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLeaflet.GeoJSON, (0, _extends2.default)({
    className: "testthis",
    data: geoJSONData
  }, geoJSONProps))) : null);
}

var _default = ShapeFile;
exports.default = _default;