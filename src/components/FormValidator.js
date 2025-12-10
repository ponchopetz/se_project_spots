// components/FormValidator.js
class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;

    // selectors/classes from settings
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._labelErrorClass = settings.labelErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    const labelElement = inputElement.closest(this._settings.labelSelector);

    inputElement.classList.add(this._inputErrorClass);
    if (labelElement) labelElement.classList.add(this._labelErrorClass);

    if (errorElement) {
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._errorClass);
    }
  }

  // hide single input error
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    const labelElement = inputElement.closest(this._settings.labelSelector);

    inputElement.classList.remove(this._inputErrorClass);
    if (labelElement) labelElement.classList.remove(this._labelErrorClass);

    if (errorElement) {
      errorElement.textContent = "";
      errorElement.classList.remove(this._errorClass);
    }
  }

  // check a single input
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  // any invalid inputs in this form?
  _hasInvalidInput() {
    return this._inputList.some((inputEl) => !inputEl.validity.valid);
  }

  // toggle the submit button disabled state
  _toggleButtonState() {
    if (!this._buttonElement) return;
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  // add listeners to inputs to validate live
  _setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );

    // initial state
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }

  resetForm() {
    this._formElement.reset();

    this.resetValidation();
  }
}

export default FormValidator;
