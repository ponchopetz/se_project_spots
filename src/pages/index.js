import "./index.css";

import { settings } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Api from "../utils/Api.js";

const avatarEditBtn = document.querySelector(".profile__avatar-edit-btn");
const editAvatarFormEl = document.querySelector(
  "#edit-avatar-modal .modal__form"
);

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

const previewModalSelector = "#preview-modal";
const previewModalImageEl = document.querySelector(".modal__image-preview");
const previewModalCaptionEl = document.querySelector(".modal__image-caption");

const deleteModalSelector = "#delete-modal";
const confirmDeleteBtn = document.querySelector("#confirm-delete-btn");
const cancelDeleteBtn = document.querySelector("#cancel-delete-btn");

const cardsListSelector = ".cards__list";
const cardTemplateSelector = "#card-template";

let currentUserId = null;
let selectedCard = null;
let selectedCardId = null;

/* =========================
   POPUPS
========================= */

const previewPopup = new Popup({ popupSelector: previewModalSelector });
previewPopup.setEventListeners();

const deletePopup = new Popup({ popupSelector: deleteModalSelector });
deletePopup.setEventListeners();

/* =========================
   API
========================= */

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1/",
  headers: {
    authorization: "58744bfa-b851-41cd-8747-fb7af9a88838",
    "Content-type": "application/json",
  },
});

/* =========================
   CARD RENDERING
========================= */

const renderCard = (cardData, { position = "append" } = {}) => {
  const card = new Card(
    cardData,
    cardTemplateSelector,
    {
      handleLike: (cardInstance) => {
        api
          .likeCard(cardInstance.id)
          .then((updatedCard) => {
            cardInstance.setLikeState(updatedCard.isLiked);
          })
          .catch((err) => console.error("Like failed:", err));
      },
      handleUnlike: (cardInstance) => {
        api
          .unlikeCard(cardInstance.id)
          .then((updatedCard) => {
            cardInstance.setLikeState(updatedCard.isLiked);
          })
          .catch((err) => console.error("Unlike failed:", err));
      },
      handleDelete: (cardInstance) => {
        selectedCard = cardInstance;
        selectedCardId = cardInstance.id;
        deletePopup.open();
      },
      handlePreview: (data) => {
        previewModalCaptionEl.textContent = data.name;
        previewModalImageEl.src = data.link;
        previewModalImageEl.alt = data.name;
        previewPopup.open();
      },
    },
    currentUserId
  );

  const cardElement = card.getView();
  spotsSection.addItem(cardElement, { position });
};

const spotsSection = new Section({
  items: [],
  renderer: (itemData) => renderCard(itemData, { position: "append" }),
  containerSelector: cardsListSelector,
});

/* =========================
   DELETE CONFIRMATION LOGIC
========================= */

confirmDeleteBtn.addEventListener("click", () => {
  if (!selectedCardId) return;

  confirmDeleteBtn.textContent = "Deleting...";

  api
    .deleteCard(selectedCardId)
    .then(() => {
      selectedCard.deleteCard();
      deletePopup.close();

      selectedCard = null;
      selectedCardId = null;
    })
    .catch((err) => console.error("Delete failed:", err))
    .finally(() => {
      confirmDeleteBtn.textContent = "Delete";
    });
});

cancelDeleteBtn.addEventListener("click", () => {
  deletePopup.close();
});

/* =========================
   POPUP WITH FORM: AVATAR
========================= */

const editAvatarPopup = new PopupWithForm({
  popupSelector: "#edit-avatar-modal",
  handleFormSubmit: (formValues) => {
    editAvatarPopup.setLoading(true);
    api
      .updateAvatar({
        avatar: formValues.avatar,
      })
      .then((updatedUser) => {
        document.querySelector(".profile__avatar").src = updatedUser.avatar;
        editAvatarPopup.close();
        avatarValidator.resetForm();
      })
      .catch((err) => {
        console.error("Failed to update avatar:", err);
      })
      .finally(() => {
        editAvatarPopup.setLoading(false);
      });
  },
});
editAvatarPopup.setEventListeners();

/* =========================
   POPUP WITH FORM: PROFILE
========================= */

const editProfilePopup = new PopupWithForm({
  popupSelector: "#edit-profile-modal",
  handleFormSubmit: (formValues) => {
    editProfilePopup.setLoading(true);
    api
      .updateUserInfo({
        name: formValues.profileName,
        about: formValues.profileDescription,
      })
      .then((updatedUser) => {
        profileNameEl.textContent = updatedUser.name;
        profileDescriptionEl.textContent = updatedUser.about;
        editProfilePopup.close();
        editValidator.resetForm();
      })
      .catch((err) => {
        console.error("Failed to update profile:", err);
      })
      .finally(() => {
        editProfilePopup.setLoading(false);
      });
  },
});
editProfilePopup.setEventListeners();

/* =========================
   POPUP WITH FORM: NEW POST
========================= */

const newPostPopup = new PopupWithForm({
  popupSelector: "#new-profile-modal",
  handleFormSubmit: (formValues) => {
    newPostPopup.setLoading(true);
    api
      .addCard({
        name: formValues.imageCaption,
        link: formValues.imageLink,
      })
      .then((createdCard) => {
        renderCard(createdCard, { position: "prepend" });
        newPostPopup.close();
        newValidator.resetForm();
      })
      .catch((err) => {
        console.error("Failed to add card:", err);
      })
      .finally(() => {
        newPostPopup.setLoading(false);
      });
  },
  disableButtonOnOpen: true,
});
newPostPopup.setEventListeners();

/* =========================
   VALIDATION ENABLERS
========================= */

const editValidator = new FormValidator(settings, editProfileFormEl);
editValidator.enableValidation();

const newValidator = new FormValidator(settings, newProfileFormEl);
newValidator.enableValidation();

const avatarValidator = new FormValidator(settings, editAvatarFormEl);
avatarValidator.enableValidation();

/* =========================
   EVENT LISTENERS
========================= */

editProfileBtn.addEventListener("click", () => {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;

  editValidator.resetValidation();
  editProfilePopup.open();
});

newProfileBtn.addEventListener("click", () => {
  newPostPopup.open();
});

avatarEditBtn.addEventListener("click", () => {
  avatarValidator.resetForm();
  editAvatarPopup.open();
});

/* =========================
   INITIAL DATA LOAD
========================= */

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    currentUserId = userData._id;
    profileNameEl.textContent = userData.name;
    profileDescriptionEl.textContent = userData.about;
    document.querySelector(".profile__avatar").src = userData.avatar;

    spotsSection.setItems(cards);
    spotsSection.renderItems();
  })
  .catch((err) => {
    console.error("Error loading initial data:", err);
  });
