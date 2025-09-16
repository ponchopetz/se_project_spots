const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const newProfileBtn = document.querySelector(".profile__new-btn");
const newProfileModal = document.querySelector("#new-profile-modal");
const newProfileCloseBtn = newProfileModal.querySelector(".modal__close-btn");
const newProfileForm = newProfileModal.querySelector(".modal__form");
const newProfileLinkInput = newProfileModal.querySelector("#post-image-url");
const newProfileCaptionInput = newProfileModal.querySelector(
  "#post-image-caption"
);

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
});
editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newProfileBtn.addEventListener("click", function () {
  openModal(newProfileModal);
});
newProfileCloseBtn.addEventListener("click", function () {
  closeModal(newProfileModal);
});

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);

function handleNewProfileFormSubmit(evt) {
  evt.preventDefault();
  console.log(newProfileLinkInput.value);
  console.log(newProfileCaptionInput.value);
  closeModal(newProfileModal);
}

newProfileForm.addEventListener("submit", handleNewProfileFormSubmit);
