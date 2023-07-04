/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/AutomatticCookieBanner/consts.ts":
/*!*********************************************************!*\
  !*** ./src/components/AutomatticCookieBanner/consts.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allBucketsTrue": function() { return /* binding */ allBucketsTrue; },
/* harmony export */   "defaultBuckets": function() { return /* binding */ defaultBuckets; }
/* harmony export */ });
var allBucketsTrue = {
  essential: true,
  analytics: true,
  advertising: true
};
var defaultBuckets = {
  essential: true,
  analytics: true,
  advertising: false
};

/***/ }),

/***/ "./src/components/AutomatticCookieBanner/customized-consent.tsx":
/*!**********************************************************************!*\
  !*** ./src/components/AutomatticCookieBanner/customized-consent.tsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizedConsent": function() { return /* binding */ CustomizedConsent; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consts */ "./src/components/AutomatticCookieBanner/consts.ts");
/* harmony import */ var _granular_consent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./granular-consent */ "./src/components/AutomatticCookieBanner/granular-consent.tsx");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var CustomizedConsent = function CustomizedConsent(_ref) {
  var content = _ref.content,
    onAccept = _ref.onAccept;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_consts__WEBPACK_IMPORTED_MODULE_4__.defaultBuckets),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    buckets = _useState2[0],
    setBuckets = _useState2[1];
  var handleChangeBucket = function handleChangeBucket(bucket) {
    return function (checked) {
      setBuckets(function (prevBuckets) {
        return _objectSpread(_objectSpread({}, prevBuckets), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, bucket, checked));
      });
    };
  };
  var handleAccept = function handleAccept() {
    onAccept(buckets);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: "cookie-banner__options-selection"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("p", {
    className: "cookie-banner__options-lead-text"
  }, content.description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_granular_consent__WEBPACK_IMPORTED_MODULE_5__.GranularConsent, {
    name: "essential",
    content: content.categories.essential,
    onChange: handleChangeBucket('essential'),
    checked: buckets.essential,
    disabled: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_granular_consent__WEBPACK_IMPORTED_MODULE_5__.GranularConsent, {
    name: "analytics",
    content: content.categories.analytics,
    onChange: handleChangeBucket('analytics'),
    checked: buckets.analytics
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_granular_consent__WEBPACK_IMPORTED_MODULE_5__.GranularConsent, {
    name: "advertising",
    content: content.categories.advertising,
    onChange: handleChangeBucket('advertising'),
    checked: buckets.advertising
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("button", {
    className: "cookie-banner__accept-selection-button",
    onClick: handleAccept
  }, content.acceptSelectionButton));
};

/***/ }),

/***/ "./src/components/AutomatticCookieBanner/granular-consent.tsx":
/*!********************************************************************!*\
  !*** ./src/components/AutomatticCookieBanner/granular-consent.tsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GranularConsent": function() { return /* binding */ GranularConsent; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var GranularConsent = function GranularConsent(_ref) {
  var name = _ref.name,
    content = _ref.content,
    disabled = _ref.disabled,
    checked = _ref.checked,
    onChange = _ref.onChange;
  var handleChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (event) {
    onChange(event.target.checked);
  }, [onChange]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cookie-banner__bucket-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FormToggle, {
    onChange: handleChange,
    checked: checked,
    disabled: disabled,
    "data-testid": "".concat(name, "-bucket-toggle")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cookie-banner__option-description"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, content.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, content.description)));
};

/***/ }),

/***/ "./src/components/AutomatticCookieBanner/index.tsx":
/*!*********************************************************!*\
  !*** ./src/components/AutomatticCookieBanner/index.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookieBanner": function() { return /* binding */ CookieBanner; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consts */ "./src/components/AutomatticCookieBanner/consts.ts");
/* harmony import */ var _customized_consent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customized-consent */ "./src/components/AutomatticCookieBanner/customized-consent.tsx");
/* harmony import */ var _simple_consent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simple-consent */ "./src/components/AutomatticCookieBanner/simple-consent.tsx");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ "./src/components/AutomatticCookieBanner/styles.scss");







var ConsentViewType;
(function (ConsentViewType) {
  ConsentViewType[ConsentViewType["Simple"] = 0] = "Simple";
  ConsentViewType[ConsentViewType["Customized"] = 1] = "Customized";
})(ConsentViewType || (ConsentViewType = {}));
var CookieBanner = function CookieBanner(_ref) {
  var content = _ref.content,
    onAccept = _ref.onAccept;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(ConsentViewType.Simple),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    viewType = _useState2[0],
    setViewType = _useState2[1];
  var handleSetCustomizedView = function handleSetCustomizedView() {
    setViewType(ConsentViewType.Customized);
  };
  var handleAcceptAll = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
    onAccept(_consts__WEBPACK_IMPORTED_MODULE_3__.allBucketsTrue);
  }, [onAccept]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "cookie-banner"
  }, ConsentViewType.Simple === viewType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_simple_consent__WEBPACK_IMPORTED_MODULE_5__.SimpleConsent, {
    content: content.simpleConsent,
    onAcceptAll: handleAcceptAll,
    onCustomize: handleSetCustomizedView
  }), ConsentViewType.Customized === viewType && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_customized_consent__WEBPACK_IMPORTED_MODULE_4__.CustomizedConsent, {
    content: content.customizedConsent,
    onAccept: onAccept
  }));
};

/***/ }),

/***/ "./src/components/AutomatticCookieBanner/simple-consent.tsx":
/*!******************************************************************!*\
  !*** ./src/components/AutomatticCookieBanner/simple-consent.tsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimpleConsent": function() { return /* binding */ SimpleConsent; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var SimpleConsent = function SimpleConsent(_ref) {
  var content = _ref.content,
    onCustomize = _ref.onCustomize,
    onAcceptAll = _ref.onAcceptAll;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cookie-banner__simple-options"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "cookie-banner__simple-text-description"
  }, content.description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cookie-banner__button-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "cookie-banner__customize-button",
    onClick: onCustomize
  }, content.customizeButton), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "cookie-banner__accept-all-button",
    onClick: onAcceptAll
  }, content.acceptAllButton)));
};

/***/ }),

/***/ "./src/components/CookieBanner/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/CookieBanner/index.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AutomatticCookieBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AutomatticCookieBanner */ "./src/components/AutomatticCookieBanner/index.tsx");
/* harmony import */ var _use_cookie_banner_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-cookie-banner-content */ "./src/components/CookieBanner/use-cookie-banner-content.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var CookieBannerInner = function CookieBannerInner(_ref) {
  var onClose = _ref.onClose;
  var content = (0,_use_cookie_banner_content__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var handleAccept = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function (buckets) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_5__.setTrackingPrefs)({
      ok: true,
      buckets: _objectSpread(_objectSpread({}, (0,_utils__WEBPACK_IMPORTED_MODULE_5__.convertBucketsToGTMOpts)(buckets)), {}, {
        functionality_storage: true,
        personalization_storage: true,
        security_storage: true
      })
    });
    onClose();
  }, [onClose]);

  // TODO Replace cookie bannner view analytics action
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_AutomatticCookieBanner__WEBPACK_IMPORTED_MODULE_3__.CookieBanner, {
    content: content,
    onAccept: handleAccept
  });
};
var CookieBannerContainer = function CookieBannerContainer() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];

  // useEffect(() => {
  // 	const controller = new AbortController();

  // 	refreshCountryCodeCookieGdpr(controller.signal)
  // 		.then(() => {
  // 			const cookies = cookie.parse(document.cookie);

  // 			setShow(shouldSeeCookieBanner(cookies.country_code, getTrackingPrefs()));
  // 		})
  // 		.catch(() => {
  // 			setShow(shouldSeeCookieBanner(undefined, getTrackingPrefs()));
  // 		});

  // 	return () => controller.abort();
  // }, [setShow]);

  var handleClose = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function () {
    setShow(false);
  }, [setShow]);
  return show ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(CookieBannerInner, {
    onClose: handleClose
  }) : null;
};
var CookieBanner = function CookieBanner() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(CookieBannerContainer, null);
};
/* harmony default export */ __webpack_exports__["default"] = (CookieBanner);

/***/ }),

/***/ "./src/components/CookieBanner/use-cookie-banner-content.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/CookieBanner/use-cookie-banner-content.tsx ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);

// import type { CookieBannerProps } from '@automattic/privacy-toolset';

var useCookieBannerContent = function useCookieBannerContent() {
  return {
    simpleConsent: {
      description: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('As an open source company, we take your privacy seriously and want to be as transparent as possible. So: We use cookies to collect some personal data from you (like your browsing data, IP addresses, and other unique identifiers). Some of these cookies we absolutely need in order to make things work, and others you can choose in order to optimize your experience while using our site and services.', 'automattic-privacy-toolset'))),
      acceptAllButton: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Accept all', 'automattic-privacy-toolset'),
      customizeButton: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Customize', 'automattic-privacy-toolset')
    },
    customizedConsent: {
      description: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('As an open source company, we take your privacy seriously and want to be as transparent as possible. So: We use cookies to collect some personal data from you (like your browsing data, IP addresses, and other unique identifiers). Some of these cookies we absolutely need in order to make things work, and others you can choose in order to optimize your experience while using our site and services.', 'automattic-privacy-toolset'))),
      categories: {
        essential: {
          name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Required', 'automattic-privacy-toolset'),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('These cookies are essential for our websites and services to perform basic functions and are necessary for us to operate certain features, like allowing registered users to authenticate and perform account-related functions, storing preferences set by users (like account name, language, and location), and ensuring our services operate properly.', 'automattic-privacy-toolset')
        },
        analytics: {
          name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Analytics', 'automattic-privacy-toolset'),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('These cookies allow us to optimize performance by collecting information on how users interact with our websites.', 'automattic-privacy-toolset')
        },
        advertising: {
          name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advertising', 'automattic-privacy-toolset'),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('We and our advertising partners set these cookies to provide you with relevant content and to understand that content’s effectiveness.', 'automattic-privacy-toolset')
        }
      },
      acceptSelectionButton: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Accept selection', 'automattic-privacy-toolset')
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (useCookieBannerContent);

/***/ }),

/***/ "./src/components/DoNotSellDialog/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/DoNotSellDialog/index.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _use_do_not_sell_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-do-not-sell-content */ "./src/components/DoNotSellDialog/use-do-not-sell-content.tsx");


var _excluded = ["isOpen"];

// import { DoNotSellDialog as AutomatticDoNotSellDialog } from '@automattic/privacy-toolset';



var DoNotSellDialogContainer = function DoNotSellDialogContainer(_ref) {
  var isOpen = _ref.isOpen,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);
  var content = (0,_use_do_not_sell_content__WEBPACK_IMPORTED_MODULE_5__.useDoNotSellContent)();
  return null;
  // return (
  // 	<AutomatticDoNotSellDialog
  // 		isOpen={isOpen}
  // 		content={content}
  // 		modalProps={{
  // 			bodyOpenClassName: null,
  // 		}}
  // 		{...props}
  // 	/>
  // );
};

var DoNotSellDialog = function DoNotSellDialog() {
  var _useDoNotSell = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.useDoNotSell)(),
    isDoNotSell = _useDoNotSell.isDoNotSell,
    onSetDoNotSell = _useDoNotSell.onSetDoNotSell;
  var shouldSeeDoNotSell = true;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    isDialogOpen = _useState2[0],
    setIsDialogOpen = _useState2[1];
  var openDialog = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {
    setIsDialogOpen(true);
  }, []);
  var closeDialog = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {
    setIsDialogOpen(false);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var selector = document.querySelectorAll('[href$="#do-not-sell-preferences"]');
    if (shouldSeeDoNotSell) {
      selector.forEach(function (element) {
        element.onclick = function (event) {
          openDialog();
          event.preventDefault();
        };
        element.style.display = 'inline';
      });
    } else {
      selector.forEach(function (element) {
        return element.style.display = 'none';
      });
    }
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, shouldSeeDoNotSell && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(DoNotSellDialogContainer, {
    isOpen: isDialogOpen,
    isActive: isDoNotSell,
    onToggleActive: onSetDoNotSell,
    onClose: closeDialog
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (DoNotSellDialog);

/***/ }),

/***/ "./src/components/DoNotSellDialog/use-do-not-sell-content.tsx":
/*!********************************************************************!*\
  !*** ./src/components/DoNotSellDialog/use-do-not-sell-content.tsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDoNotSellContent": function() { return /* binding */ useDoNotSellContent; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


var useDoNotSellContent = function useDoNotSellContent() {
  return {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Do Not Sell or Share My Data', 'automattic-privacy-toolset'),
    longDescription: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Your privacy is critically important to us so we strive to be transparent in how we are collecting, using, and sharing your information. We use cookies and other technologies to help us identify and track visitors to our sites, to store usage and access preferences for our services, to track and understand email campaign effectiveness, and to deliver targeted ads. Learn more in ', 'automattic-privacy-toolset'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://automattic.com/privacy/",
      target: "_blank"
    }, "our Privacy Policy"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(' and ', 'automattic-privacy-toolset'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://automattic.com/cookies/",
      target: "_blank"
    }, "our Cookie Policy"), "."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Like many websites, we share some of the data we collect through cookies with certain third party advertising and analytics vendors. The personal information we share includes online identifiers; internet or other network or device activity (such as cookie information, other device identifiers, and IP address); and geolocation data (approximate location information from your IP address). We do not share information that identifies you personally, like your name or contact information.', 'automattic-privacy-toolset')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('We never directly sell your personal information in the conventional sense (i.e., for money), but in some U.S. states the sharing of your information with advertising/analytics vendors can be considered a “sale” of your information, which you may have the right to opt out of. To opt out, click the link below.', 'automattic-privacy-toolset')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Our opt-out is managed through cookies, so if you delete cookies, your browser is set to delete cookies automatically after a certain length of time, or if you visit sites in a different browser, you’ll need to make this selection again.', 'automattic-privacy-toolset')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('If you have any questions about this opt out, or how we honor your legal rights, you can contact us at ', 'automattic-privacy-toolset'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "mailto:vipprivacyshield@automattic.com"
    }, "vipprivacyshield@automattic.com"), ".")),
    toggleLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Do Not Sell or Share My Data'),
    closeButton: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Close')
  };
};

/***/ }),

/***/ "./src/gtm-init.ts":
/*!*************************!*\
  !*** ./src/gtm-init.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");


var GDPRRegions = [
// European Member countries
'AT',
// Austria
'BE',
// Belgium
'BG',
// Bulgaria
'CY',
// Cyprus
'CZ',
// Czech Republic
'DE',
// Germany
'DK',
// Denmark
'EE',
// Estonia
'ES',
// Spain
'FI',
// Finland
'FR',
// France
'GR',
// Greece
'HR',
// Croatia
'HU',
// Hungary
'IE',
// Ireland
'IT',
// Italy
'LT',
// Lithuania
'LU',
// Luxembourg
'LV',
// Latvia
'MT',
// Malta
'NL',
// Netherlands
'PL',
// Poland
'PT',
// Portugal
'RO',
// Romania
'SE',
// Sweden
'SI',
// Slovenia
'SK',
// Slovakia
'GB',
// United Kingdom
// Single Market Countries that GDPR applies to
'CH',
// Switzerland
'IS',
// Iceland
'LI',
// Liechtenstein
'NO' // Norway
];

var CCPARegions = ['US'];

// For clarity, all 3 defaults are explicitly set
// here, even though technically this can be done with
// GDPR and a default.

var defaultConsentOptsGDPR = {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  personalization_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 5000,
  region: GDPRRegions
};
var defaultConsentOptsCCPA = {
  ad_storage: 'granted',
  analytics_storage: 'granted',
  functionality_storage: 'granted',
  personalization_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 5000,
  region: CCPARegions
};
var defaultConsentOpts = {
  ad_storage: 'granted',
  analytics_storage: 'granted',
  functionality_storage: 'granted',
  personalization_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 5000
};
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
var gtmInit = function gtmInit() {
  gtag('consent', 'default', defaultConsentOptsGDPR);
  gtag('consent', 'default', defaultConsentOptsCCPA);
  gtag('consent', 'default', defaultConsentOpts);
  var prefs = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getTrackingPrefs)();
  if (prefs) {
    var opts = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.convertPrefsToGTMOpts)(prefs);
    gtag('consent', 'update', opts);
  }
  gtag('js', new Date());
  gtag('config', 'GTM-5QBVTK7');
};
/* harmony default export */ __webpack_exports__["default"] = (gtmInit);

/***/ }),

/***/ "./src/utils/convert-prefs.ts":
/*!************************************!*\
  !*** ./src/utils/convert-prefs.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertBucketsToGTMOpts": function() { return /* binding */ convertBucketsToGTMOpts; },
/* harmony export */   "convertPrefsToGTMOpts": function() { return /* binding */ convertPrefsToGTMOpts; }
/* harmony export */ });
// Norway

var convertBucketsToGTMOpts = function convertBucketsToGTMOpts(buckets) {
  return {
    ad_storage: buckets.advertising,
    analytics_storage: buckets.analytics
  };
};
var convertPrefsToGTMOpts = function convertPrefsToGTMOpts(prefs) {
  var pref = prefs.buckets;
  return {
    ad_storage: pref.ad_storage ? 'granted' : 'denied',
    analytics_storage: pref.analytics_storage ? 'granted' : 'denied',
    functionality_storage: pref.functionality_storage ? 'granted' : 'denied',
    personalization_storage: pref.personalization_storage ? 'granted' : 'denied',
    security_storage: pref.security_storage ? 'granted' : 'denied'
  };
};


/***/ }),

/***/ "./src/utils/debug.js":
/*!****************************!*\
  !*** ./src/utils/debug.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Module variables
 */
/* harmony default export */ __webpack_exports__["default"] = (debug__WEBPACK_IMPORTED_MODULE_0___default()('calypso:analytics:utils'));

/***/ }),

/***/ "./src/utils/get-tracking-prefs.ts":
/*!*****************************************!*\
  !*** ./src/utils/get-tracking-prefs.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TRACKING_PREFS_COOKIE_V1": function() { return /* binding */ TRACKING_PREFS_COOKIE_V1; },
/* harmony export */   "default": function() { return /* binding */ getTrackingPrefs; },
/* harmony export */   "parseTrackingPrefs": function() { return /* binding */ parseTrackingPrefs; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");
/* harmony import */ var _is_country_in_gdpr_zone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-country-in-gdpr-zone */ "./src/utils/is-country-in-gdpr-zone.ts");
/* harmony import */ var _is_region_in_ccpa_zone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-region-in-ccpa-zone */ "./src/utils/is-region-in-ccpa-zone.ts");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var TRACKING_PREFS_COOKIE_V1 = 'gtm_options';
var prefsDisallowAll = {
  ok: false,
  buckets: {
    ad_storage: false,
    analytics_storage: false,
    functionality_storage: true,
    personalization_storage: true,
    security_storage: true
  }
};
var prefsAllowAll = {
  ok: false,
  buckets: {
    ad_storage: true,
    analytics_storage: true,
    functionality_storage: true,
    personalization_storage: true,
    security_storage: true
  }
};
var parseTrackingPrefs = function parseTrackingPrefs(cookieV1) {
  var defaultPrefs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : prefsDisallowAll;
  var _ref = cookieV1 ? JSON.parse(cookieV1) : {},
    ok = _ref.ok,
    buckets = _ref.buckets;
  if (typeof ok === 'boolean') {
    return {
      ok: ok,
      buckets: _objectSpread(_objectSpread({}, defaultPrefs.buckets), buckets)
    };
  }
  return defaultPrefs;
};

/**
 * Returns consents for every Cookie Jar bucket based on privacy driven approach
 *
 * WARNING: this function only works on the client side.
 *
 * @returns Whether we may track the current user
 */
function getTrackingPrefs() {
  var cookies = cookie__WEBPACK_IMPORTED_MODULE_1__.parse(document.cookie);
  var isCountryGdpr = (0,_is_country_in_gdpr_zone__WEBPACK_IMPORTED_MODULE_2__["default"])(cookies.country_code);
  var isCountryCcpa = (0,_is_region_in_ccpa_zone__WEBPACK_IMPORTED_MODULE_3__["default"])(cookies.country_code, cookies.region);
  if (!isCountryGdpr && !isCountryCcpa) {
    return prefsAllowAll;
  }

  // default tracking mechanism for GDPR is opt-in, for CCPA is opt-out:
  var defaultPrefs = isCountryGdpr ? prefsDisallowAll : prefsAllowAll;
  var _parseTrackingPrefs = parseTrackingPrefs(cookies[TRACKING_PREFS_COOKIE_V1], defaultPrefs),
    ok = _parseTrackingPrefs.ok,
    buckets = _parseTrackingPrefs.buckets;
  if (isCountryCcpa) {
    // For CCPA, only the advertising bucket is relevant, the rest are always true
    return {
      ok: ok,
      buckets: _objectSpread(_objectSpread({}, prefsAllowAll.buckets), {}, {
        ad_storage: buckets.ad_storage
      })
    };
  }

  // For CCPA, only the advertising bucket is relevant, the rest are always true
  return {
    ok: ok,
    buckets: buckets
  };
}

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TRACKING_PREFS_COOKIE_V1": function() { return /* reexport safe */ _get_tracking_prefs__WEBPACK_IMPORTED_MODULE_3__.TRACKING_PREFS_COOKIE_V1; },
/* harmony export */   "convertBucketsToGTMOpts": function() { return /* reexport safe */ _convert_prefs__WEBPACK_IMPORTED_MODULE_6__.convertBucketsToGTMOpts; },
/* harmony export */   "convertPrefsToGTMOpts": function() { return /* reexport safe */ _convert_prefs__WEBPACK_IMPORTED_MODULE_6__.convertPrefsToGTMOpts; },
/* harmony export */   "getTrackingPrefs": function() { return /* reexport safe */ _get_tracking_prefs__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "isCountryInGdprZone": function() { return /* reexport safe */ _is_country_in_gdpr_zone__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "parseTrackingPrefs": function() { return /* reexport safe */ _get_tracking_prefs__WEBPACK_IMPORTED_MODULE_3__.parseTrackingPrefs; },
/* harmony export */   "refreshCountryCodeCookieGdpr": function() { return /* reexport safe */ _refresh_country_code_cookie_gdpr__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "setTrackingPrefs": function() { return /* reexport safe */ _set_tracking_prefs__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "shouldSeeCookieBanner": function() { return /* reexport safe */ _should_see_cookie_banner__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "useDoNotSell": function() { return /* reexport safe */ _use_do_not_sell__WEBPACK_IMPORTED_MODULE_5__["default"]; }
/* harmony export */ });
/* harmony import */ var _is_country_in_gdpr_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-country-in-gdpr-zone */ "./src/utils/is-country-in-gdpr-zone.ts");
/* harmony import */ var _refresh_country_code_cookie_gdpr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refresh-country-code-cookie-gdpr */ "./src/utils/refresh-country-code-cookie-gdpr.js");
/* harmony import */ var _should_see_cookie_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./should-see-cookie-banner */ "./src/utils/should-see-cookie-banner.ts");
/* harmony import */ var _get_tracking_prefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-tracking-prefs */ "./src/utils/get-tracking-prefs.ts");
/* harmony import */ var _set_tracking_prefs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./set-tracking-prefs */ "./src/utils/set-tracking-prefs.ts");
/* harmony import */ var _use_do_not_sell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./use-do-not-sell */ "./src/utils/use-do-not-sell.ts");
/* harmony import */ var _convert_prefs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./convert-prefs */ "./src/utils/convert-prefs.ts");
// export { default as MARKETING_COUPONS_KEY } from './marketing-coupons-key';
// export { default as costToUSD } from './cost-to-usd';
// export { default as hashPii } from './hash-pii';
// export { default as isPiiUrl } from './is-pii-url';
// export { default as isUrlExcludedForPerformance } from './is-url-excluded-for-performance';

// export { default as urlParseAmpCompatible } from './url-parse-amp-compatible';
// export { default as shouldReportOmitBlogId } from './should-report-omit-blog-id';
// export { default as shouldReportOmitSiteMainProduct } from './should-report-omit-site-main-product';
// export { default as saveCouponQueryArgument } from './save-coupon-query-argument';







/***/ }),

/***/ "./src/utils/is-country-in-gdpr-zone.ts":
/*!**********************************************!*\
  !*** ./src/utils/is-country-in-gdpr-zone.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isCountryInGdprZone; }
/* harmony export */ });
var GDPR_COUNTRIES = [
// European Member countries
'AT',
// Austria
'BE',
// Belgium
'BG',
// Bulgaria
'CY',
// Cyprus
'CZ',
// Czech Republic
'DE',
// Germany
'DK',
// Denmark
'EE',
// Estonia
'ES',
// Spain
'FI',
// Finland
'FR',
// France
'GR',
// Greece
'HR',
// Croatia
'HU',
// Hungary
'IE',
// Ireland
'IT',
// Italy
'LT',
// Lithuania
'LU',
// Luxembourg
'LV',
// Latvia
'MT',
// Malta
'NL',
// Netherlands
'PL',
// Poland
'PT',
// Portugal
'RO',
// Romania
'SE',
// Sweden
'SI',
// Slovenia
'SK',
// Slovakia
'GB',
// United Kingdom
// Single Market Countries that GDPR applies to
'CH',
// Switzerland
'IS',
// Iceland
'LI',
// Liechtenstein
'NO' // Norway
];

/**
 * Returns a boolean telling whether a country is in the GDPR zone.
 *
 * @param countryCode The country code to look for.
 * @returns Whether the country is in the GDPR zone
 */
function isCountryInGdprZone(countryCode) {
  if ('unknown' === countryCode) {
    // Fail safe: if we don't know the countryCode, assume it's in the Gdpr zone.
    return true;
  }
  return countryCode !== undefined && GDPR_COUNTRIES.includes(countryCode);
}

/***/ }),

/***/ "./src/utils/is-region-in-ccpa-zone.ts":
/*!*********************************************!*\
  !*** ./src/utils/is-region-in-ccpa-zone.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isRegionInCcpaZone; }
/* harmony export */ });
var CCPA_US_REGIONS = ['california',
// CA
'colorado',
// CO
'connecticut',
// CT
'utah',
// UT
'virginia' // VA
];

/**
 * Returns a boolean telling whether a region is in the CCPA zone.
 *
 * @param countryCode The country code to check (it needs to be 'US' for CCPA to apply)
 * @param region The region to look for.
 * @returns Whether the region is in the GDPR zone
 */
function isRegionInCcpaZone(countryCode, region) {
  if ('US' !== countryCode) {
    return false;
  }
  if ('unknown' === region) {
    // Fail safe: if we don't know the region, assume it's in the CCPA zone.
    return true;
  }
  return region !== undefined && CCPA_US_REGIONS.includes(region.toLowerCase());
}

/***/ }),

/***/ "./src/utils/refresh-country-code-cookie-gdpr.js":
/*!*******************************************************!*\
  !*** ./src/utils/refresh-country-code-cookie-gdpr.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ refreshCountryCodeCookieGdpr; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debug */ "./src/utils/debug.js");




var refreshRequest = null;

/**
 * Refreshes the GDPR `country_code` cookie every 6 hours (like A8C_Analytics wpcom plugin).
 *
 * @param {AbortSignal} signal optional AbortSignal to cancel the request (use if needed)
 * @returns {Promise<void>} Promise that resolves when the refreshing is done (or immediately)
 */
function refreshCountryCodeCookieGdpr() {
  return _refreshCountryCodeCookieGdpr.apply(this, arguments);
}
function _refreshCountryCodeCookieGdpr() {
  _refreshCountryCodeCookieGdpr = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var signal,
      cookies,
      _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            signal = _args.length > 0 && _args[0] !== undefined ? _args[0] : undefined;
            cookies = cookie__WEBPACK_IMPORTED_MODULE_2__.parse(document.cookie);
            if (!(cookies.country_code && cookies.region)) {
              _context.next = 5;
              break;
            }
            (0,_debug__WEBPACK_IMPORTED_MODULE_3__["default"])('refreshCountryCodeCookieGdpr: country_code ( value: "%s") and region ( value: "%s") cookies are fresh', cookies.country_code, cookies.region);
            return _context.abrupt("return");
          case 5:
            if (refreshRequest === null) {
              refreshRequest = requestGeoData(signal).then(function (_ref) {
                var countryCode = _ref.countryCode,
                  region = _ref.region;
                setCountryCodeCookie(countryCode);
                setRegionCookie(region);
              });
            }
            _context.next = 8;
            return refreshRequest;
          case 8:
            refreshRequest = null;
          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _refreshCountryCodeCookieGdpr.apply(this, arguments);
}
function requestGeoData() {
  var signal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  // cache buster
  var v = new Date().getTime();
  return fetch('https://public-api.wordpress.com/geo/?v=' + v, {
    signal: signal
  }).then(function (res) {
    if (!res.ok) {
      return res.body().then(function (body) {
        throw new Error(body);
      });
    }
    return res.json();
  }).then(function (json) {
    return {
      countryCode: json.country_short,
      region: json.region
    };
  }).catch(function (err) {
    (0,_debug__WEBPACK_IMPORTED_MODULE_3__["default"])('refreshCountryCodeCookieGdpr: error: ', err);
    return {
      countryCode: 'unknown',
      region: 'unknown'
    };
  });
}
function setCountryCodeCookie(countryCode) {
  var maxAge = 6 * 60 * 60; // 6 hours in seconds
  document.cookie = cookie__WEBPACK_IMPORTED_MODULE_2__.serialize('country_code', countryCode, {
    path: '/',
    maxAge: maxAge
  });
  (0,_debug__WEBPACK_IMPORTED_MODULE_3__["default"])('refreshCountryCodeCookieGdpr: country_code cookie set to %s', countryCode);
}
function setRegionCookie(region) {
  var maxAge = 6 * 60 * 60;
  document.cookie = cookie__WEBPACK_IMPORTED_MODULE_2__.serialize('region', region, {
    path: '/',
    maxAge: maxAge
  });
  (0,_debug__WEBPACK_IMPORTED_MODULE_3__["default"])('refreshRegionCookieCcpa: region cookie set to %s', region);
}

/***/ }),

/***/ "./src/utils/set-tracking-prefs.ts":
/*!*****************************************!*\
  !*** ./src/utils/set-tracking-prefs.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/utils/index.ts");
/* harmony import */ var _convert_prefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./convert-prefs */ "./src/utils/convert-prefs.ts");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




// type TrackingPrefsData = Partial<Omit<TrackingPrefs, 'buckets'> & { buckets:  }>;

var COOKIE_MAX_AGE = 60 * 60 * 24 * (365.25 / 2); /* six months; 365.25 -> avg days in year */

var setTrackingPrefs = function setTrackingPrefs(newPrefs) {
  if (newPrefs.buckets) {
    var _getTrackingPrefs = (0,___WEBPACK_IMPORTED_MODULE_2__.getTrackingPrefs)(),
      ok = _getTrackingPrefs.ok,
      buckets = _getTrackingPrefs.buckets;
    var newOptions = {
      ok: typeof newPrefs.ok === 'boolean' ? newPrefs.ok : ok,
      buckets: _objectSpread(_objectSpread({}, buckets), newPrefs.buckets)
    };
    document.cookie = cookie__WEBPACK_IMPORTED_MODULE_1__.serialize(___WEBPACK_IMPORTED_MODULE_2__.TRACKING_PREFS_COOKIE_V1, JSON.stringify(newOptions), {
      path: '/',
      maxAge: COOKIE_MAX_AGE
    });
    if (typeof gtag === 'function') {
      var opts = (0,_convert_prefs__WEBPACK_IMPORTED_MODULE_3__.convertPrefsToGTMOpts)(newOptions);
      gtag('consent', 'update', opts);
    }
    return newOptions;
  }
  return false;
};
/* harmony default export */ __webpack_exports__["default"] = (setTrackingPrefs);

/***/ }),

/***/ "./src/utils/should-see-cookie-banner.ts":
/*!***********************************************!*\
  !*** ./src/utils/should-see-cookie-banner.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ shouldSeeCookieBanner; }
/* harmony export */ });
/* harmony import */ var _is_country_in_gdpr_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-country-in-gdpr-zone */ "./src/utils/is-country-in-gdpr-zone.ts");
// import { isE2ETest } from 'calypso/lib/e2e';


var isServer = typeof document === 'undefined';

/**
 * Returns a boolean indicating whether a GDPR banner should be shown.
 *
 * Defaults to `false` if the country code is unknown.
 *
 * @param countryCode Country code determined either from cookie or from a special header
 * @param trackingPrefs Parsed object based on `sensitive_pixel_options` (v2) cookie structure
 * @returns Whether the current user could be in the GDPR zone. When the `countryCode` are
 * `undefined`, we return `null` which has a meaning of "result unknown".
 */
function shouldSeeCookieBanner(countryCode, trackingPrefs) {
  // the banner is not shown for pages embedded as web view inside the mobile app or during e2e tests
  // if (!isServer && isE2ETest()) {
  // 	return false;
  // }

  // the request for consent has already been answered, we no longer need to ask
  if (trackingPrefs !== null && trackingPrefs !== void 0 && trackingPrefs.ok) {
    return false;
  }

  // if we had issues fetching geo cookies (`countryCode`), fail safe and show the banner
  if (countryCode === undefined) {
    return true;
  }
  return (0,_is_country_in_gdpr_zone__WEBPACK_IMPORTED_MODULE_0__["default"])(countryCode);
}

/***/ }),

/***/ "./src/utils/use-do-not-sell.ts":
/*!**************************************!*\
  !*** ./src/utils/use-do-not-sell.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _is_region_in_ccpa_zone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-region-in-ccpa-zone */ "./src/utils/is-region-in-ccpa-zone.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./src/utils/index.ts");





/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    shouldSeeDoNotSell = _useState2[0],
    setShouldSeeDoNotSell = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    isDoNotSell = _useState4[0],
    setIsDoNotSell = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var controller = new AbortController();
    (0,___WEBPACK_IMPORTED_MODULE_4__.refreshCountryCodeCookieGdpr)(controller.signal).then(function () {
      var cookies = cookie__WEBPACK_IMPORTED_MODULE_1__.parse(document.cookie);
      setShouldSeeDoNotSell((0,_is_region_in_ccpa_zone__WEBPACK_IMPORTED_MODULE_3__["default"])(cookies.country_code, cookies.region));
    }).catch(function () {
      // Fail safe: in case of error, we offer Do Not Sell anyway
      setShouldSeeDoNotSell(true);
    });
    return function () {
      return controller.abort();
    };
  }, [setShouldSeeDoNotSell]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    // We set initial `isDoNotSell` via hook to make sure it run only on client side (when SSR)
    setIsDoNotSell(!(0,___WEBPACK_IMPORTED_MODULE_4__.getTrackingPrefs)().buckets.ad_storage);
  }, []);
  var onSetDoNotSell = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (isActive) {
    // isActive = true means user has opted out of "advertising" tracking
    var prefs = (0,___WEBPACK_IMPORTED_MODULE_4__.setTrackingPrefs)({
      ok: true,
      buckets: {
        ad_storage: !isActive
      }
    });
    setIsDoNotSell(!prefs.buckets.ad_storage);
  }, [setIsDoNotSell]);
  return {
    shouldSeeDoNotSell: shouldSeeDoNotSell,
    onSetDoNotSell: onSetDoNotSell,
    isDoNotSell: isDoNotSell
  };
});

/***/ }),

/***/ "./node_modules/cookie/index.js":
/*!**************************************!*\
  !*** ./node_modules/cookie/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var __toString = Object.prototype.toString

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var dec = opt.decode || decode;

  var index = 0
  while (index < str.length) {
    var eqIdx = str.indexOf('=', index)

    // no more cookie pairs
    if (eqIdx === -1) {
      break
    }

    var endIdx = str.indexOf(';', index)

    if (endIdx === -1) {
      endIdx = str.length
    } else if (endIdx < eqIdx) {
      // backtrack on prior semicolon
      index = str.lastIndexOf(';', eqIdx - 1) + 1
      continue
    }

    var key = str.slice(index, eqIdx).trim()

    // only assign once
    if (undefined === obj[key]) {
      var val = str.slice(eqIdx + 1, endIdx).trim()

      // quoted values
      if (val.charCodeAt(0) === 0x22) {
        val = val.slice(1, -1)
      }

      obj[key] = tryDecode(val, dec);
    }

    index = endIdx + 1
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    var expires = opt.expires

    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + expires.toUTCString()
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.priority) {
    var priority = typeof opt.priority === 'string'
      ? opt.priority.toLowerCase()
      : opt.priority

    switch (priority) {
      case 'low':
        str += '; Priority=Low'
        break
      case 'medium':
        str += '; Priority=Medium'
        break
      case 'high':
        str += '; Priority=High'
        break
      default:
        throw new TypeError('option priority is invalid')
    }
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * URL-decode string value. Optimized to skip native call when no %.
 *
 * @param {string} str
 * @returns {string}
 */

function decode (str) {
  return str.indexOf('%') !== -1
    ? decodeURIComponent(str)
    : str
}

/**
 * URL-encode value.
 *
 * @param {string} str
 * @returns {string}
 */

function encode (val) {
  return encodeURIComponent(val)
}

/**
 * Determine if value is a Date.
 *
 * @param {*} val
 * @private
 */

function isDate (val) {
  return __toString.call(val) === '[object Date]' ||
    val instanceof Date
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}


/***/ }),

/***/ "./node_modules/debug/node_modules/ms/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/debug/node_modules/ms/index.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ "./node_modules/debug/src/common.js":
/*!******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/debug/node_modules/ms/index.js");
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "./src/components/AutomatticCookieBanner/styles.scss":
/*!***********************************************************!*\
  !*** ./src/components/AutomatticCookieBanner/styles.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*************************************!*\
  !*** external "regeneratorRuntime" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["regeneratorRuntime"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutProperties; }
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toPrimitive; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toPropertyKey; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!****************************************!*\
  !*** ./src/privacy-consent-banner.tsx ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DoNotSellDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/DoNotSellDialog */ "./src/components/DoNotSellDialog/index.tsx");
/* harmony import */ var _components_CookieBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CookieBanner */ "./src/components/CookieBanner/index.tsx");
/* harmony import */ var _gtm_init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gtm-init */ "./src/gtm-init.ts");




(0,_gtm_init__WEBPACK_IMPORTED_MODULE_3__["default"])();

// @ts-ignore
var render = wp.element.render;
var App = function App() {
  var selector = '#privacy-consent-banner';
  render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CookieBanner__WEBPACK_IMPORTED_MODULE_2__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_DoNotSellDialog__WEBPACK_IMPORTED_MODULE_1__["default"], null)), document.querySelector(selector));
};
document.addEventListener('DOMContentLoaded', App, false);
}();
/******/ })()
;
//# sourceMappingURL=privacy-consent-banner.js.map