class Card {
  constructor(
    data,
    templateSelector,
    { handleLike, handleUnlike, handleDelete, handlePreview } = {},
    currentUserId
  ) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._handleLike = handleLike;
    this._handleUnlike = handleUnlike;
    this._handleDelete = handleDelete;
    this._handlePreview = handlePreview;

    this.id = data._id;
    this._ownerId = data.owner;
    this._currentUserId = currentUserId;

    // ✅ Boolean like state from backend
    this._isLiked = Boolean(data.isLiked);
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  _updateLikeState() {
    if (this._isLiked) {
      this._likeBtn.classList.add("card__like-btn_active");
    } else {
      this._likeBtn.classList.remove("card__like-btn_active");
    }
  }

  setLikeState(isLiked) {
    this._isLiked = isLiked;
    this._updateLikeState();
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeBtn.addEventListener("click", () => {
      if (this._isLiked) {
        this._handleUnlike(this);
      } else {
        this._handleLike(this);
      }
    });

    if (this._deleteBtn) {
      this._deleteBtn.addEventListener("click", () => {
        this._handleDelete(this);
      });
    }

    this._imageEl.addEventListener("click", () => {
      this._handlePreview(this._data);
    });
  }

  getView() {
    this._element = this._getTemplate();

    this._titleEl = this._element.querySelector(".card__title");
    this._imageEl = this._element.querySelector(".card__image");
    this._likeBtn = this._element.querySelector(".card__like-btn");
    this._deleteBtn = this._element.querySelector(".card__delete-btn");

    this._titleEl.textContent = this._data.name;
    this._imageEl.src = this._data.link;
    this._imageEl.alt = this._data.name;

    // ✅ Correct ownership check
    if (this._ownerId !== this._currentUserId) {
      this._deleteBtn.remove();
      this._deleteBtn = null;
    }

    this._updateLikeState();
    this._setEventListeners();

    return this._element;
  }
}

export default Card;
