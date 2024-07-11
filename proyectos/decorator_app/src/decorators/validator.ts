import ValidationData from "../interfaces/ValidationData.js"; 

const registeredValidations: ValidationData = {}

export function addValidation(typeValidations: string[]) {
    return function(target: any, propName: string){
        registeredValidations[target.constructor.name] = {
            [propName]: typeValidations, 
            ...registeredValidations[target.constructor.name]
        }
    }
}

export function validate(objectToValidate:any) {
    const registeredValidationsToObject = registeredValidations[objectToValidate.constructor.name];
    
    if(!registeredValidationsToObject){
        return true
    }

    
    return executeValidations(objectToValidate, registeredValidationsToObject);
}

function executeValidations(objectToValidate:any, objectValidations:  { [propName: string]: string[] }) {
    let isValid = true;
    

    for(const property in objectValidations){
        for(const typeValidation of objectValidations[property] ){
            switch(typeValidation){
                case "required":
                    isValid = isValid && !!objectToValidate[property];
                    break;
                case "password":
                    isValid = isValid &&  objectToValidate[property].length > 5;
            }
        }
    }
    
    return isValid;
}

