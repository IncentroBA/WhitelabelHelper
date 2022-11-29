
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { createElement } from 'react';

function WhitelabelHelper({
  CSSVariables,
  ...rest
}) {
  const id = rest.id || "";
  const style = rest.class || "";
  const widgetName = rest.name || "";
  return createElement("div", {
    id: id,
    className: `widget-css-variables ${style} ${widgetName}`
  }, CSSVariables.map(variable => {
    if (variable.Value.value) {
      document.documentElement.style.setProperty(`--${variable.Property}`, variable.Value.value);
    }
  }));
}

export { WhitelabelHelper };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hpdGVsYWJlbEhlbHBlci5tanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9XaGl0ZWxhYmVsSGVscGVyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBXaGl0ZWxhYmVsSGVscGVyKHsgQ1NTVmFyaWFibGVzLCAuLi5yZXN0IH0pIHtcbiAgICBjb25zdCBpZCA9IHJlc3QuaWQgfHwgXCJcIjtcbiAgICBjb25zdCBzdHlsZSA9IHJlc3QuY2xhc3MgfHwgXCJcIjtcbiAgICBjb25zdCB3aWRnZXROYW1lID0gcmVzdC5uYW1lIHx8IFwiXCI7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD17aWR9IGNsYXNzTmFtZT17YHdpZGdldC1jc3MtdmFyaWFibGVzICR7c3R5bGV9ICR7d2lkZ2V0TmFtZX1gfT5cbiAgICAgICAgICAgIHtDU1NWYXJpYWJsZXMubWFwKHZhcmlhYmxlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFyaWFibGUuVmFsdWUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7dmFyaWFibGUuUHJvcGVydHl9YCwgdmFyaWFibGUuVmFsdWUudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIldoaXRlbGFiZWxIZWxwZXIiLCJDU1NWYXJpYWJsZXMiLCJyZXN0IiwiaWQiLCJzdHlsZSIsImNsYXNzIiwid2lkZ2V0TmFtZSIsIm5hbWUiLCJtYXAiLCJ2YXJpYWJsZSIsIlZhbHVlIiwidmFsdWUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNldFByb3BlcnR5IiwiUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7QUFFTyxTQUFTQSxnQkFBZ0IsQ0FBQztFQUFFQyxZQUFZO0VBQUUsR0FBR0MsSUFBQUE7QUFBSyxDQUFDLEVBQUU7QUFDeEQsRUFBQSxNQUFNQyxFQUFFLEdBQUdELElBQUksQ0FBQ0MsRUFBRSxJQUFJLEVBQUUsQ0FBQTtBQUN4QixFQUFBLE1BQU1DLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxLQUFLLElBQUksRUFBRSxDQUFBO0FBQzlCLEVBQUEsTUFBTUMsVUFBVSxHQUFHSixJQUFJLENBQUNLLElBQUksSUFBSSxFQUFFLENBQUE7RUFDbEMsT0FDSSxhQUFBLENBQUEsS0FBQSxFQUFBO0FBQUssSUFBQSxFQUFFLEVBQUVKLEVBQUc7QUFBQyxJQUFBLFNBQVMsRUFBRyxDQUFBLHFCQUFBLEVBQXVCQyxLQUFNLENBQUEsQ0FBQSxFQUFHRSxVQUFXLENBQUEsQ0FBQTtBQUFFLEdBQUEsRUFDakVMLFlBQVksQ0FBQ08sR0FBRyxDQUFDQyxRQUFRLElBQUk7QUFDMUIsSUFBQSxJQUFJQSxRQUFRLENBQUNDLEtBQUssQ0FBQ0MsS0FBSyxFQUFFO0FBQ3RCQyxNQUFBQSxRQUFRLENBQUNDLGVBQWUsQ0FBQ1QsS0FBSyxDQUFDVSxXQUFXLENBQUUsQ0FBSUwsRUFBQUEsRUFBQUEsUUFBUSxDQUFDTSxRQUFTLEVBQUMsRUFBRU4sUUFBUSxDQUFDQyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFBO0FBQzlGLEtBQUE7QUFDSixHQUFDLENBQUMsQ0FDQSxDQUFBO0FBRWQ7Ozs7In0=
