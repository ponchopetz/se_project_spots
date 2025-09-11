const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});
editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

const newProfileBtn = document.querySelector(".profile__new-btn");
const newProfileModal = document.querySelector("#new-profile-modal");
const newProfileCloseBtn = newProfileModal.querySelector(".modal__close-btn");

newProfileBtn.addEventListener("click", function () {
  newProfileModal.classList.add("modal_is-opened");
});
newProfileCloseBtn.addEventListener("click", function () {
  newProfileModal.classList.remove("modal_is-opened");
});
