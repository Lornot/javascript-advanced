function replaceElements(selector, newTagName, attributes) {

    /** get all elements with that selector */
    let elementsToReplace = document.querySelectorAll(selector);

    /** for each found element */
    for (let i = 0; i < elementsToReplace.length; i++) {
        let oldElement = elementsToReplace[i];
        let oldElementChildren = oldElement.children;

        /** get all attributes */
        let elementAttributes = [];
        for (let k = 0, attrs = oldElement.attributes; k < attrs.length; k++) {
            elementAttributes.push({
                key: attrs[i].nodeName,
                value: attrs[i].nodeValue
            });
        }

        /** if attributes are defined in arguments - merge them with the attributes from old element */
        if (attributes) {
            elementAttributes.concat(arguments);
        }

        /** create new element with new tag name */
        let newElement = document.createElement(newTagName);

        /** set new attributes from the attributes argument */
        for (let i = 0; i < elementAttributes.length; i++) {
            let attribute = elementAttributes[i];
            newElement.setAttribute(attribute.key, attribute.value);
        }

        for (let i = 0; i < oldElementChildren.length; i++) {
            newElement.appendChild(oldElementChildren[i].cloneNode(true));
        }

        oldElement.replaceWith(newElement);
    }

}