import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".modal__form");
    this._inputList = Array.from(this._form.querySelectorAll(".modal__input"));
  }

  setLoading(isLoading, loadingText = "Saving...") {
    if (!this._submitBtn) {
      this._submitBtn = this._popupElement.querySelector(".modal__submit-btn");
      this._defaultSubmitText = this._submitBtn.textContent;
    }

    if (isLoading) {
      this._submitBtn.textContent = loadingText;
      this._submitBtn.disabled = true;
    } else {
      this._submitBtn.textContent = this._defaultSubmitText;
      this._submitBtn.disabled = false;
    }
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
    });
  }

  close() {
    super.close();
  }
}
export default PopupWithForm;
