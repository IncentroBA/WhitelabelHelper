'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* Editor Preview Styles */\n.whitelabel-helper-preview {\n  align-items: center;\n  border: solid 1px #ced0d3;\n  margin-bottom: 16px;\n  padding: 4px;\n  display: flex;\n}\n.whitelabel-helper-preview__icon {\n  align-items: center;\n  display: flex;\n  height: 16px;\n  justify-content: center;\n  width: 16px;\n}\n.whitelabel-helper-preview__text {\n  margin-bottom: 0;\n  margin-left: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIldoaXRlbGFiZWxIZWxwZXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQjtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiV2hpdGVsYWJlbEhlbHBlci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBFZGl0b3IgUHJldmlldyBTdHlsZXMgKi9cbi53aGl0ZWxhYmVsLWhlbHBlci1wcmV2aWV3IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NlZDBkMztcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZzogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ud2hpdGVsYWJlbC1oZWxwZXItcHJldmlld19faWNvbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTZweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxNnB4O1xufVxuXG4ud2hpdGVsYWJlbC1oZWxwZXItcHJldmlld19fdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4iXX0= */";
var stylesheet="/* Editor Preview Styles */\n.whitelabel-helper-preview {\n  align-items: center;\n  border: solid 1px #ced0d3;\n  margin-bottom: 16px;\n  padding: 4px;\n  display: flex;\n}\n.whitelabel-helper-preview__icon {\n  align-items: center;\n  display: flex;\n  height: 16px;\n  justify-content: center;\n  width: 16px;\n}\n.whitelabel-helper-preview__text {\n  margin-bottom: 0;\n  margin-left: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIldoaXRlbGFiZWxIZWxwZXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQjtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiV2hpdGVsYWJlbEhlbHBlci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBFZGl0b3IgUHJldmlldyBTdHlsZXMgKi9cbi53aGl0ZWxhYmVsLWhlbHBlci1wcmV2aWV3IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NlZDBkMztcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZzogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ud2hpdGVsYWJlbC1oZWxwZXItcHJldmlld19faWNvbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTZweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxNnB4O1xufVxuXG4ud2hpdGVsYWJlbC1oZWxwZXItcHJldmlld19fdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4iXX0= */";
styleInject(css_248z);

var WhitelabelHelper = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': css_248z,
	stylesheet: stylesheet
});

var require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(WhitelabelHelper);

function preview() {
  return react.createElement("div", {
    className: "whitelabel-helper-preview"
  }, react.createElement("div", {
    className: "whitelabel-helper-preview__icon"
  }, react.createElement("svg", {
    viewBox: "0 0 40 40"
  }, react.createElement("path", {
    fill: "#0397ec",
    d: "M31.12,18.12L17.88,4.88c-.56-.56-1.33-.88-2.12-.88H3c-1.66,0-3,1.34-3,3v12.76c0,.8,.32,1.56,.88,2.12l13.24,13.24c1.17,1.17,3.07,1.17,4.24,0l12.76-12.76c1.17-1.17,1.17-3.07,0-4.24h0ZM7,14c-1.66,0-3-1.34-3-3s1.34-3,3-3,3,1.34,3,3-1.34,3-3,3Zm32.12,8.36l-12.76,12.76c-1.17,1.17-3.07,1.17-4.24,0l-.02-.02,10.88-10.88c1.06-1.06,1.65-2.48,1.65-3.98s-.59-2.92-1.65-3.98L20.71,4h3.05c.8,0,1.56,.32,2.12,.88l13.24,13.24c1.17,1.17,1.17,3.07,0,4.24h0Z"
  }))), react.createElement("p", {
    className: "whitelabel-helper-preview__text"
  }, react.createElement("span", null, "Whitelabel helper")));
}
function getPreviewCss() {
  return require$$0;
}

exports.getPreviewCss = getPreviewCss;
exports.preview = preview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hpdGVsYWJlbEhlbHBlci5lZGl0b3JQcmV2aWV3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtaW5qZWN0L2Rpc3Qvc3R5bGUtaW5qZWN0LmVzLmpzIiwiLi4vLi4vLi4vc3JjL1doaXRlbGFiZWxIZWxwZXIuZWRpdG9yUHJldmlldy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3R5bGVJbmplY3QoY3NzLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IHt9O1xuICB2YXIgaW5zZXJ0QXQgPSByZWYuaW5zZXJ0QXQ7XG5cbiAgaWYgKCFjc3MgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgaWYgKGluc2VydEF0ID09PSAndG9wJykge1xuICAgIGlmIChoZWFkLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZUluamVjdDtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByZXZpZXcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGl0ZWxhYmVsLWhlbHBlci1wcmV2aWV3XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoaXRlbGFiZWwtaGVscGVyLXByZXZpZXdfX2ljb25cIj5cbiAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNDAgNDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMDM5N2VjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzEuMTIsMTguMTJMMTcuODgsNC44OGMtLjU2LS41Ni0xLjMzLS44OC0yLjEyLS44OEgzYy0xLjY2LDAtMywxLjM0LTMsM3YxMi43NmMwLC44LC4zMiwxLjU2LC44OCwyLjEybDEzLjI0LDEzLjI0YzEuMTcsMS4xNywzLjA3LDEuMTcsNC4yNCwwbDEyLjc2LTEyLjc2YzEuMTctMS4xNywxLjE3LTMuMDcsMC00LjI0aDBaTTcsMTRjLTEuNjYsMC0zLTEuMzQtMy0zczEuMzQtMywzLTMsMywxLjM0LDMsMy0xLjM0LDMtMywzWm0zMi4xMiw4LjM2bC0xMi43NiwxMi43NmMtMS4xNywxLjE3LTMuMDcsMS4xNy00LjI0LDBsLS4wMi0uMDIsMTAuODgtMTAuODhjMS4wNi0xLjA2LDEuNjUtMi40OCwxLjY1LTMuOThzLS41OS0yLjkyLTEuNjUtMy45OEwyMC43MSw0aDMuMDVjLjgsMCwxLjU2LC4zMiwyLjEyLC44OGwxMy4yNCwxMy4yNGMxLjE3LDEuMTcsMS4xNywzLjA3LDAsNC4yNGgwWlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndoaXRlbGFiZWwtaGVscGVyLXByZXZpZXdfX3RleHRcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5XaGl0ZWxhYmVsIGhlbHBlcjwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpZXdDc3MoKSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoXCIuL3VpL1doaXRlbGFiZWxIZWxwZXIuY3NzXCIpO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlSW5qZWN0IiwiY3NzIiwicmVmIiwiaW5zZXJ0QXQiLCJkb2N1bWVudCIsImhlYWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJmaXJzdENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImNyZWF0ZVRleHROb2RlIiwicHJldmlldyIsImdldFByZXZpZXdDc3MiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsU0FBU0EsV0FBVyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtFQUM3QixJQUFLQSxHQUFHLEtBQUssS0FBSyxDQUFDLEVBQUdBLEdBQUcsR0FBRyxFQUFFLENBQUE7QUFDOUIsRUFBQSxJQUFJQyxRQUFRLEdBQUdELEdBQUcsQ0FBQ0MsUUFBUSxDQUFBO0FBRTNCLEVBQUEsSUFBSSxDQUFDRixHQUFHLElBQUksT0FBT0csUUFBUSxLQUFLLFdBQVcsRUFBRTtBQUFFLElBQUEsT0FBQTtBQUFRLEdBQUE7QUFFdkQsRUFBQSxJQUFJQyxJQUFJLEdBQUdELFFBQVEsQ0FBQ0MsSUFBSSxJQUFJRCxRQUFRLENBQUNFLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3BFLEVBQUEsSUFBSUMsS0FBSyxHQUFHSCxRQUFRLENBQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtFQUMzQ0QsS0FBSyxDQUFDRSxJQUFJLEdBQUcsVUFBVSxDQUFBO0VBRXZCLElBQUlOLFFBQVEsS0FBSyxLQUFLLEVBQUU7SUFDdEIsSUFBSUUsSUFBSSxDQUFDSyxVQUFVLEVBQUU7TUFDbkJMLElBQUksQ0FBQ00sWUFBWSxDQUFDSixLQUFLLEVBQUVGLElBQUksQ0FBQ0ssVUFBVSxDQUFDLENBQUE7QUFDM0MsS0FBQyxNQUFNO0FBQ0xMLE1BQUFBLElBQUksQ0FBQ08sV0FBVyxDQUFDTCxLQUFLLENBQUMsQ0FBQTtBQUN6QixLQUFBO0FBQ0YsR0FBQyxNQUFNO0FBQ0xGLElBQUFBLElBQUksQ0FBQ08sV0FBVyxDQUFDTCxLQUFLLENBQUMsQ0FBQTtBQUN6QixHQUFBO0VBRUEsSUFBSUEsS0FBSyxDQUFDTSxVQUFVLEVBQUU7QUFDcEJOLElBQUFBLEtBQUssQ0FBQ00sVUFBVSxDQUFDQyxPQUFPLEdBQUdiLEdBQUcsQ0FBQTtBQUNoQyxHQUFDLE1BQU07SUFDTE0sS0FBSyxDQUFDSyxXQUFXLENBQUNSLFFBQVEsQ0FBQ1csY0FBYyxDQUFDZCxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ2pELEdBQUE7QUFDRjs7Ozs7Ozs7Ozs7Ozs7QUN2Qk8sU0FBU2UsT0FBTyxHQUFHO0VBQ3RCLE9BQ0lSLG1CQUFBLENBQUEsS0FBQSxFQUFBO0FBQUssSUFBQSxTQUFTLEVBQUMsMkJBQUE7R0FDWCxFQUFBQSxtQkFBQSxDQUFBLEtBQUEsRUFBQTtBQUFLLElBQUEsU0FBUyxFQUFDLGlDQUFBO0dBQ1gsRUFBQUEsbUJBQUEsQ0FBQSxLQUFBLEVBQUE7QUFBSyxJQUFBLE9BQU8sRUFBQyxXQUFBO0dBQ1QsRUFBQUEsbUJBQUEsQ0FBQSxNQUFBLEVBQUE7QUFDSSxJQUFBLElBQUksRUFBQyxTQUFTO0FBQ2QsSUFBQSxDQUFDLEVBQUMsMGJBQUE7R0FDSixDQUFBLENBQ0EsQ0FDSixFQUNOQSxtQkFBQSxDQUFBLEdBQUEsRUFBQTtBQUFHLElBQUEsU0FBUyxFQUFDLGlDQUFBO0dBQ1QsRUFBQUEsbUJBQUEsQ0FBQSxNQUFBLEVBQUEsSUFBQSxFQUFBLG1CQUFBLENBQThCLENBQzlCLENBQ0YsQ0FBQTtBQUVkLENBQUE7QUFFTyxTQUFTUyxhQUFhLEdBQUc7RUFDNUIsT0FBT0MsVUFBb0MsQ0FBQTtBQUMvQzs7Ozs7In0=
