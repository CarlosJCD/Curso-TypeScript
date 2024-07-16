const registeredValidations = {};
export function addValidation(typeValidations) {
    return function (target, propName) {
        registeredValidations[target.constructor.name] = Object.assign({ [propName]: typeValidations }, registeredValidations[target.constructor.name]);
    };
}
export function validate(objectToValidate) {
    const registeredValidationsToObject = registeredValidations[objectToValidate.constructor.name];
    if (!registeredValidationsToObject) {
        return true;
    }
    return executeValidations(objectToValidate, registeredValidationsToObject);
}
function executeValidations(objectToValidate, objectValidations) {
    let isValid = true;
    for (const property in objectValidations) {
        for (const typeValidation of objectValidations[property]) {
            switch (typeValidation) {
                case "required":
                    isValid = isValid && !!objectToValidate[property];
                    break;
                case "password":
                    isValid = isValid && objectToValidate[property].length > 5;
            }
        }
    }
    return isValid;
}
//# sourceMappingURL=validator.js.map