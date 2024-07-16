import { emailInput, logInForm, passwordInput } from "./DOM/htmlElements.js";
import Person from "./classes/Person.js";
import { validate } from "./decorators/validator.js";
logInForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const loggedPerson = new Person(emailInput.value, passwordInput.value);
    const result = validate(loggedPerson);
    if (!result) {
        alert("Campos erroneos");
    }
    else {
        alert("Inicio de sesión correcto");
        console.log(loggedPerson);
    }
});
//# sourceMappingURL=index.js.map