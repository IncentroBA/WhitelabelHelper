import { Component, createElement } from "react";

export default class WhitelabelHelper extends Component {
    render() {
        return (
            <div className="widget-css-variables">
                {this.props.CSSVariables.map(variable => {
                    if (variable.Value.value) {
                        document.documentElement.style.setProperty(`--${variable.Property}`, variable.Value.value);
                    }
                })}
            </div>
        );
    }
}
