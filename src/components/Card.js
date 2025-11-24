export default class Card {
  constructor(
    data,
    templateSelector,
    { handleLike, handleDelete, handlePreview } = {}
  ) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._handleLike = handleLike;
    this._handleDelete = handleDelete;
    this._handlePreview = handlePreview;
  }

  // get a cloned template element
  _getTemplate() {
    const template = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return template;
  }

  // attach event handlers
  _setEventListeners() {
    const likeBtn = this._element.querySelector(".card__like-btn");
    const deleteBtn = this._element.querySelector(".card__delete-btn");
    const imageEl = this._element.querySelector(".card__image");

    likeBtn.addEventListener("click", () => {
      likeBtn.classList.toggle("card__like-btn_active");
      if (this._handleLike) this._handleLike(this._data);
    });

    deleteBtn.addEventListener("click", () => {
      // remove from DOM
      this._element.remove();
      if (this._handleDelete) this._handleDelete(this._data);
    });

    imageEl.addEventListener("click", () => {
      if (this._handlePreview) this._handlePreview(this._data);
    });
  }

  // populate the cloned template with data and wire events
  getView() {
    this._element = this._getTemplate();
    const titleEl = this._element.querySelector(".card__title");
    const imageEl = this._element.querySelector(".card__image");

    titleEl.textContent = this._data.name;
    imageEl.src = this._data.link;
    imageEl.alt = this._data.name;

    this._setEventListeners();

    return this._element;
  }
}
