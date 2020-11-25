"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServerSideProps = getServerSideProps;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireWildcard(require("react"));

var _router = require("next/router");

var _Layout = _interopRequireDefault(require("../components/Layout"));

var _Header = _interopRequireDefault(require("../components/Header"));

var _GirdImage = _interopRequireDefault(require("../components/GirdImage"));

var _config = require("../config");

var _head = _interopRequireDefault(require("next/head"));

import React from "react";
var __jsx = React.createElement;
var QUANTITY_PER_PAGE = 4;

function Index(_ref) {
  var data = _ref.data;
  var router = (0, _router.useRouter)();

  var _useState = (0, _react.useState)(4),
      next = _useState[0],
      setNext = _useState[1];

  var _useState2 = (0, _react.useState)([]),
      saveImgLocalStorage = _useState2[0],
      setSaveImgLocalStorage = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      fetchImgFromUrl = _useState3[0],
      setFetchImgFromUrl = _useState3[1];

  var _useState4 = (0, _react.useState)(false),
      success = _useState4[0],
      setSuccess = _useState4[1]; //save img to myfavorite


  var handleClick = function handleClick(item) {
    if (saveImgLocalStorage.indexOf(item) == -1) {
      setSuccess(true);
      setTimeout(function () {
        setSuccess(false);
      }, 1000);
      return setSaveImgLocalStorage(function (state) {
        return [].concat((0, _toConsumableArray2["default"])(state), [item]);
      });
    }
  };

  var getLocalStorage = function getLocalStorage() {
    var valueLocalStorage = JSON.parse(window.localStorage.getItem("my-favorite" || []));

    if (valueLocalStorage && valueLocalStorage.length > 0) {
      setSaveImgLocalStorage(valueLocalStorage);
    }

    return;
  };

  var handleShowMorePicture = function handleShowMorePicture() {
    setNext(next + QUANTITY_PER_PAGE);
  };

  (0, _react.useEffect)(function () {
    getLocalStorage();
  }, []);
  (0, _react.useEffect)(function () {
    setFetchImgFromUrl(data);
    setNext(QUANTITY_PER_PAGE);
  }, [data]);
  (0, _react.useEffect)(function () {
    window.localStorage.setItem("my-favorite", JSON.stringify(saveImgLocalStorage));
  }, [saveImgLocalStorage]);
  return __jsx(_react["default"].Fragment, null, __jsx(_head["default"], null, __jsx("title", null, "giphy")), __jsx(_Layout["default"], null, __jsx(_Header["default"], null), success && __jsx("div", {
    className: "alert alert-success",
    role: "alert"
  }, "Add Successfully!"), __jsx(_GirdImage["default"], {
    listGif: fetchImgFromUrl.slice(0, next),
    handleClick: handleClick
  }), next < fetchImgFromUrl.length && __jsx("button", {
    className: "btn btn-primary",
    disabled: false,
    onClick: handleShowMorePicture
  }, "Fetch More")));
}

function getServerSideProps(_x) {
  return _getServerSideProps.apply(this, arguments);
}

function _getServerSideProps() {
  _getServerSideProps = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(context) {
    var value, res, listGif, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            value = context.query.value;

            if (!value) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return fetch("".concat(_config.API, "?api_key=").concat(_config.API_KEY, "&q=").concat(value));

          case 4:
            _context.t0 = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.next = 9;
            return fetch("".concat(_config.API, "?api_key=").concat(_config.API_KEY, "&q=''"));

          case 9:
            _context.t0 = _context.sent;

          case 10:
            res = _context.t0;
            _context.next = 13;
            return res.json();

          case 13:
            listGif = _context.sent;
            data = listGif.data;
            return _context.abrupt("return", {
              props: {
                data: data
              }
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getServerSideProps.apply(this, arguments);
}

var _default = Index;
exports["default"] = _default;
