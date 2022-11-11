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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hpdGVsYWJlbEhlbHBlci5tanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9XaGl0ZWxhYmVsSGVscGVyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBXaGl0ZWxhYmVsSGVscGVyKHsgQ1NTVmFyaWFibGVzLCAuLi5yZXN0IH0pIHtcbiAgICBjb25zdCBpZCA9IHJlc3QuaWQgfHwgXCJcIjtcbiAgICBjb25zdCBzdHlsZSA9IHJlc3QuY2xhc3MgfHwgXCJcIjtcbiAgICBjb25zdCB3aWRnZXROYW1lID0gcmVzdC5uYW1lIHx8IFwiXCI7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD17aWR9IGNsYXNzTmFtZT17YHdpZGdldC1jc3MtdmFyaWFibGVzICR7c3R5bGV9ICR7d2lkZ2V0TmFtZX1gfT5cbiAgICAgICAgICAgIHtDU1NWYXJpYWJsZXMubWFwKHZhcmlhYmxlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFyaWFibGUuVmFsdWUudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGAtLSR7dmFyaWFibGUuUHJvcGVydHl9YCwgdmFyaWFibGUuVmFsdWUudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIldoaXRlbGFiZWxIZWxwZXIiLCJDU1NWYXJpYWJsZXMiLCJyZXN0IiwiaWQiLCJzdHlsZSIsImNsYXNzIiwid2lkZ2V0TmFtZSIsIm5hbWUiLCJtYXAiLCJ2YXJpYWJsZSIsIlZhbHVlIiwidmFsdWUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNldFByb3BlcnR5IiwiUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7O0FBRU8sU0FBU0EsZ0JBQWdCLENBQUM7RUFBRUMsWUFBWTtFQUFFLEdBQUdDLElBQUFBO0FBQUssQ0FBQyxFQUFFO0FBQ3hELEVBQUEsTUFBTUMsRUFBRSxHQUFHRCxJQUFJLENBQUNDLEVBQUUsSUFBSSxFQUFFLENBQUE7QUFDeEIsRUFBQSxNQUFNQyxLQUFLLEdBQUdGLElBQUksQ0FBQ0csS0FBSyxJQUFJLEVBQUUsQ0FBQTtBQUM5QixFQUFBLE1BQU1DLFVBQVUsR0FBR0osSUFBSSxDQUFDSyxJQUFJLElBQUksRUFBRSxDQUFBO0VBQ2xDLE9BQ0ksYUFBQSxDQUFBLEtBQUEsRUFBQTtBQUFLLElBQUEsRUFBRSxFQUFFSixFQUFHO0FBQUMsSUFBQSxTQUFTLEVBQUcsQ0FBQSxxQkFBQSxFQUF1QkMsS0FBTSxDQUFBLENBQUEsRUFBR0UsVUFBVyxDQUFBLENBQUE7QUFBRSxHQUFBLEVBQ2pFTCxZQUFZLENBQUNPLEdBQUcsQ0FBQ0MsUUFBUSxJQUFJO0FBQzFCLElBQUEsSUFBSUEsUUFBUSxDQUFDQyxLQUFLLENBQUNDLEtBQUssRUFBRTtBQUN0QkMsTUFBQUEsUUFBUSxDQUFDQyxlQUFlLENBQUNULEtBQUssQ0FBQ1UsV0FBVyxDQUFFLENBQUlMLEVBQUFBLEVBQUFBLFFBQVEsQ0FBQ00sUUFBUyxFQUFDLEVBQUVOLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLENBQUMsQ0FBQTtBQUM5RixLQUFBO0FBQ0osR0FBQyxDQUFDLENBQ0EsQ0FBQTtBQUVkOzs7OyJ9
