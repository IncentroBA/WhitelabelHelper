'use strict';

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
Object.defineProperty(exports, '__esModule', {
  value: true
});

/**
 * @typedef Property
 * @type {object}
 * @property {string} key
 * @property {string} caption
 * @property {string} description
 * @property {string[]} objectHeaders
 * @property {ObjectProperties[]} objects
 * @property {Properties[]} properties
 */

/**
 * @typedef ObjectProperties
 * @type {object}
 * @property {PropertyGroup[]} properties
 * @property {string[]} captions
 */

/**
 * @typedef PropertyGroup
 * @type {object}
 * @property {string} caption
 * @property {PropertyGroup[]} propertyGroups
 * @property {Property[]} properties
 */

/**
 * @typedef Properties
 * @type {PropertyGroup}
 */

/**
 * @typedef Problem
 * @type {object}
 * @property {string} property
 * @property {("error" | "warning" | "deprecation")} severity
 * @property {string} message
 * @property {string} studioMessage
 * @property {string} url
 * @property {string} studioUrl
 */

/**
 * @param {object} values
 * @param {Properties} defaultProperties
 * @param {("web"|"desktop")} target
 * @returns {Properties}
 */
function getProperties(values, defaultProperties, target) {
  // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.
  /* Example
  if (values.myProperty === "custom") {
      delete defaultProperties.properties.myOtherProperty;
  }
  */
  return defaultProperties;
}

// /**
//  * @param {Object} values
//  * @returns {Problem[]} returns a list of problems.
//  */
// export function check(values) {
//    /** @type {Problem[]} */
//    const errors = [];
//    // Add errors to the above array to throw errors in Studio and Studio Pro.
//    /* Example
//    if (values.myProperty !== "custom") {
//        errors.push({
//            property: `myProperty`,
//            message: `The value of 'myProperty' is different of 'custom'.`,
//            url: "https://github.com/myrepo/mywidget"
//        });
//    }
//    */
//    return errors;
// }

// /**
//  * @param {object} values
//  * @param {boolean} isDarkMode
//  * @returns {object}
//  */
// export function getPreview(values, isDarkMode) {
//     // Customize your pluggable widget appearance for Studio Pro.
//     return {
//         type: "Container",
//         children: []
//     };
// }
function getPreview(values, isDarkMode) {
  var mySvgImage = "<svg viewBox=\"0 0 40 40\"><path fill=\"".concat(isDarkMode ? "#465BE0" : "#0397ec", "\" d=\"M31.12,18.12L17.88,4.88c-.56-.56-1.33-.88-2.12-.88H3c-1.66,0-3,1.34-3,3v12.76c0,.8,.32,1.56,.88,2.12l13.24,13.24c1.17,1.17,3.07,1.17,4.24,0l12.76-12.76c1.17-1.17,1.17-3.07,0-4.24h0ZM7,14c-1.66,0-3-1.34-3-3s1.34-3,3-3,3,1.34,3,3-1.34,3-3,3Zm32.12,8.36l-12.76,12.76c-1.17,1.17-3.07,1.17-4.24,0l-.02-.02,10.88-10.88c1.06-1.06,1.65-2.48,1.65-3.98s-.59-2.92-1.65-3.98L20.71,4h3.05c.8,0,1.56,.32,2.12,.88l13.24,13.24c1.17,1.17,1.17,3.07,0,4.24h0Z\"/></svg>");
  var container = {
    type: "Container",
    // backgroundColor: isDarkMode ? "#33231f" : "#fff6f3",
    borders: true,
    padding: 8,
    children: [{
      borders: false,
      columnSize: "grow",
      type: "RowLayout",
      children: [{
        type: "Image",
        document: mySvgImage,
        width: 16,
        grow: 0
      }, {
        type: "Container",
        padding: 2,
        grow: 0
      }, {
        content: "Whitelabel helper",
        grow: 1,
        type: "Text"
      }]
    }, {
      type: "Container",
      borders: false,
      padding: 4,
      children: []
    }, {
      type: "Container",
      borders: false,
      children: []
    }]
  };
  var _iterator = _createForOfIteratorHelper(values.CSSVariables),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      container.children[2].children.push({
        type: "Selectable",
        object: item,
        child: {
          type: "Container",
          borders: true,
          children: [{
            type: "RowLayout",
            columnSize: "grow",
            children: [{
              type: "Container",
              grow: 0,
              padding: 8,
              children: [{
                type: "Text",
                content: item.Property
              }]
            }, {
              type: "Container",
              grow: 1,
              padding: 8,
              children: [{
                type: "Text",
                content: item.Value
              }]
            }]
          }]
        }
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return container;
}

// /**
//  * @param {Object} values
//  * @param {("web"|"desktop")} platform
//  * @returns {string}
//  */
// export function getCustomCaption(values, platform) {
//     return "NativeNavigation";
// }

exports.getPreview = getPreview;
exports.getProperties = getProperties;
