
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
define(['exports', 'react'], (function (exports, react) { 'use strict';

    function WhitelabelHelper({
      CSSVariables,
      ...rest
    }) {
      const id = rest.id || "";
      const style = rest.class || "";
      const widgetName = rest.name || "";
      return react.createElement("div", {
        id: id,
        className: `widget-css-variables ${style} ${widgetName}`
      }, CSSVariables.map(variable => {
        if (variable.Value.value) {
          document.documentElement.style.setProperty(`--${variable.Property}`, variable.Value.value);
        }
      }));
    }

    exports.WhitelabelHelper = WhitelabelHelper;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hpdGVsYWJlbEhlbHBlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL1doaXRlbGFiZWxIZWxwZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFdoaXRlbGFiZWxIZWxwZXIoeyBDU1NWYXJpYWJsZXMsIC4uLnJlc3QgfSkge1xuICAgIGNvbnN0IGlkID0gcmVzdC5pZCB8fCBcIlwiO1xuICAgIGNvbnN0IHN0eWxlID0gcmVzdC5jbGFzcyB8fCBcIlwiO1xuICAgIGNvbnN0IHdpZGdldE5hbWUgPSByZXN0Lm5hbWUgfHwgXCJcIjtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtgd2lkZ2V0LWNzcy12YXJpYWJsZXMgJHtzdHlsZX0gJHt3aWRnZXROYW1lfWB9PlxuICAgICAgICAgICAge0NTU1ZhcmlhYmxlcy5tYXAodmFyaWFibGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZS5WYWx1ZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoYC0tJHt2YXJpYWJsZS5Qcm9wZXJ0eX1gLCB2YXJpYWJsZS5WYWx1ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiV2hpdGVsYWJlbEhlbHBlciIsIkNTU1ZhcmlhYmxlcyIsInJlc3QiLCJpZCIsInN0eWxlIiwiY2xhc3MiLCJ3aWRnZXROYW1lIiwibmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJ2YXJpYWJsZSIsIlZhbHVlIiwidmFsdWUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNldFByb3BlcnR5IiwiUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7SUFFTyxTQUFTQSxnQkFBZ0IsQ0FBQztNQUFFQyxZQUFZO01BQUUsR0FBR0MsSUFBQUE7SUFBSyxDQUFDLEVBQUU7SUFDeEQsRUFBQSxNQUFNQyxFQUFFLEdBQUdELElBQUksQ0FBQ0MsRUFBRSxJQUFJLEVBQUUsQ0FBQTtJQUN4QixFQUFBLE1BQU1DLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxLQUFLLElBQUksRUFBRSxDQUFBO0lBQzlCLEVBQUEsTUFBTUMsVUFBVSxHQUFHSixJQUFJLENBQUNLLElBQUksSUFBSSxFQUFFLENBQUE7TUFDbEMsT0FDSUMsbUJBQUEsQ0FBQSxLQUFBLEVBQUE7SUFBSyxJQUFBLEVBQUUsRUFBRUwsRUFBRztJQUFDLElBQUEsU0FBUyxFQUFHLENBQUEscUJBQUEsRUFBdUJDLEtBQU0sQ0FBQSxDQUFBLEVBQUdFLFVBQVcsQ0FBQSxDQUFBO0lBQUUsR0FBQSxFQUNqRUwsWUFBWSxDQUFDUSxHQUFHLENBQUNDLFFBQVEsSUFBSTtJQUMxQixJQUFBLElBQUlBLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLEVBQUU7SUFDdEJDLE1BQUFBLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDVixLQUFLLENBQUNXLFdBQVcsQ0FBRSxDQUFJTCxFQUFBQSxFQUFBQSxRQUFRLENBQUNNLFFBQVMsRUFBQyxFQUFFTixRQUFRLENBQUNDLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLENBQUE7SUFDOUYsS0FBQTtJQUNKLEdBQUMsQ0FBQyxDQUNBLENBQUE7SUFFZDs7Ozs7Ozs7OzsifQ==
