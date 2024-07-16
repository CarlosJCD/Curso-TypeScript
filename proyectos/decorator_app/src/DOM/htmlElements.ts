import { EMAIL_INPUT_ID, LOG_IN_FORM_ID, PASSWORD_INPUT_ID } from "./selectors.js";

const logInForm: HTMLFormElement = document.getElementById(LOG_IN_FORM_ID) as HTMLFormElement;

const emailInput: HTMLInputElement = document.getElementById(EMAIL_INPUT_ID) as HTMLInputElement;

const passwordInput: HTMLInputElement = document.getElementById(PASSWORD_INPUT_ID) as HTMLInputElement;


export {
    logInForm,
    emailInput,
    passwordInput
}
