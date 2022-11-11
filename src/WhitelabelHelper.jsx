import { createElement } from "react";

export function WhitelabelHelper({ CSSVariables, ...rest }) {
    const id = rest.id || "";
    const style = rest.class || "";
    const widgetName = rest.name || "";
    return (
        <div id={id} className={`widget-css-variables ${style} ${widgetName}`}>
            {CSSVariables.map(variable => {
                if (variable.Value.value) {
                    document.documentElement.style.setProperty(`--${variable.Property}`, variable.Value.value);
                }
            })}
        </div>
    );
}
