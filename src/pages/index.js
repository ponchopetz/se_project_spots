import "./index.css";

import { settings, initialCards } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileFormEl = document.querySelector(
  "#edit-profile-modal .modal__form"
);
const editProfileNameInput = document.querySelector("#name-input");
const editProfileDescriptionInput =
  document.querySelector("#description-input");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const newProfileBtn = document.querySelector(".profile__new-btn");
const newProfileFormEl = document.querySelector(
  "#new-profile-modal .modal__form"
);
const newProfileLinkInput = document.querySelector("#image-url");
const newProfileCaptionInput = document.querySelector("#image-caption");

const previewModalSelector = "#preview-modal";
const previewModalImageEl = document.querySelector(".modal__image-preview");
const previewModalCaptionEl = document.querySelector(".modal__image-caption");

const cardsListSelector = ".cards__list";
const cardTemplateSelector = "#card-template";

const renderCard = (cardData, { position = "append" } = {}) => {
  const card = new Card(cardData, cardTemplateSelector, {
    handleLike: (data) => {
      // optional: persist like, analytics, etc.
      // console.log("liked", data);
    },
    handleDelete: (data) => {
      // optional: update local state or storage
      // console.log("deleted", data);
    },
    handlePreview: (data) => {
      previewModalCaptionEl.textContent = data.name;
      previewModalImageEl.src = data.link;
      previewModalImageEl.alt = data.name;
      previewPopup.open();
    },
  });

  const cardElement = card.getView();
  // add to section (append by default, or prepend for new items)
  spotsSection.addItem(cardElement, { position });
};

const spotsSection = new Section({
  items: initialCards,
  renderer: (itemData) => renderCard(itemData, { position: "append" }),
  containerSelector: cardsListSelector,
});

const previewPopup = new Popup({ popupSelector: previewModalSelector });
previewPopup.setEventListeners();

const editProfilePopup = new PopupWithForm({
  popupSelector: "#edit-profile-modal",
  handleFormSubmit: (formValues) => {
    profileNameEl.textContent = formValues.profileName;
    profileDescriptionEl.textContent = formValues.profileDescription;
    editProfilePopup.close();
  },
});
editProfilePopup.setEventListeners();

const newPostPopup = new PopupWithForm({
  popupSelector: "#new-profile-modal",
  handleFormSubmit: (formValues) => {
    const newCardData = {
      name: formValues.imageCaption,
      link: formValues.imageLink,
    };
    renderCard(newCardData, { position: "prepend" });
    newPostPopup.close();
    newValidator.resetForm();
  },
});
newPostPopup.setEventListeners();

const editValidator = new FormValidator(settings, editProfileFormEl);
editValidator.enableValidation();

const newValidator = new FormValidator(settings, newProfileFormEl);
newValidator.enableValidation();

editProfileBtn.addEventListener("click", () => {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;

  editValidator.resetValidation();

  editProfilePopup.open();
});

newProfileBtn.addEventListener("click", () => {
  newPostPopup.open();
});

spotsSection.renderItems();
