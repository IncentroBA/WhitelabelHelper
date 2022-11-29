import { createElement } from "react";

export function preview() {
    return (
        <div className="whitelabel-helper-preview">
            <div className="whitelabel-helper-preview__icon">
                <svg viewBox="0 0 40 40">
                    <path
                        fill="#0397ec"
                        d="M31.12,18.12L17.88,4.88c-.56-.56-1.33-.88-2.12-.88H3c-1.66,0-3,1.34-3,3v12.76c0,.8,.32,1.56,.88,2.12l13.24,13.24c1.17,1.17,3.07,1.17,4.24,0l12.76-12.76c1.17-1.17,1.17-3.07,0-4.24h0ZM7,14c-1.66,0-3-1.34-3-3s1.34-3,3-3,3,1.34,3,3-1.34,3-3,3Zm32.12,8.36l-12.76,12.76c-1.17,1.17-3.07,1.17-4.24,0l-.02-.02,10.88-10.88c1.06-1.06,1.65-2.48,1.65-3.98s-.59-2.92-1.65-3.98L20.71,4h3.05c.8,0,1.56,.32,2.12,.88l13.24,13.24c1.17,1.17,1.17,3.07,0,4.24h0Z"
                    />
                </svg>
            </div>
            <p className="whitelabel-helper-preview__text">
                <span>Whitelabel helper</span>
            </p>
        </div>
    );
}

export function getPreviewCss() {
    return require("./ui/WhitelabelHelper.css");
}
