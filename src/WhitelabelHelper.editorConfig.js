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
export function getProperties(values, defaultProperties, target) {
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
export function getPreview(values, isDarkMode) {
    const mySvgImage = `<svg viewBox="0 0 40 40"><path fill="${isDarkMode ? "#465BE0" : "#0397ec"}" d="M31.12,18.12L17.88,4.88c-.56-.56-1.33-.88-2.12-.88H3c-1.66,0-3,1.34-3,3v12.76c0,.8,.32,1.56,.88,2.12l13.24,13.24c1.17,1.17,3.07,1.17,4.24,0l12.76-12.76c1.17-1.17,1.17-3.07,0-4.24h0ZM7,14c-1.66,0-3-1.34-3-3s1.34-3,3-3,3,1.34,3,3-1.34,3-3,3Zm32.12,8.36l-12.76,12.76c-1.17,1.17-3.07,1.17-4.24,0l-.02-.02,10.88-10.88c1.06-1.06,1.65-2.48,1.65-3.98s-.59-2.92-1.65-3.98L20.71,4h3.05c.8,0,1.56,.32,2.12,.88l13.24,13.24c1.17,1.17,1.17,3.07,0,4.24h0Z"/></svg>`;
    const container = {
        type: "Container",
        // backgroundColor: isDarkMode ? "#33231f" : "#fff6f3",
        borders: true,
        padding: 8,
        children: [
            {
                borders: false,
                columnSize: "grow",
                type: "RowLayout",
                children: [
                    { type: "Image", document: mySvgImage, width: 16, grow: 0 },
                    { type: "Container", padding: 2, grow: 0 },
                    {
                        content: "Whitelabel helper",
                        grow: 1,
                        type: "Text"
                    }
                ],
            },
            {
                type: "Container",
                borders: false,
                padding: 4,
                children: []
            },
            {
                type: "Container",
                borders: false,
                children: []
            }
        ]
    };

    for (const item of values.CSSVariables) {
        container.children[2].children.push({
            type: "Selectable",
            object: item,
            child: {
                type: "Container",
                borders: true,
                children: [
                    {
                        type: "RowLayout",
                        columnSize: "grow",
                        children: [
                            {
                                type: "Container",
                                grow: 0,
                                padding: 8,
                                children: [{ type: "Text", content: item.Property }]
                            },
                            {
                                type: "Container",
                                grow: 1,
                                padding: 8,
                                children: [{ type: "Text", content: item.Value }]
                            }
                        ]
                    }
                ]
            }
        });
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
