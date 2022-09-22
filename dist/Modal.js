"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./modal.css");

const Modal = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("h2", null, "Employee Created !"), /*#__PURE__*/React.createElement("button", {
    className: "close-modal"
  }, "Close")));
};

var _default = Modal;
exports.default = _default;