class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _request(endpoint, options = {}) {
    return fetch(`${this._baseUrl}${endpoint}`, {
      headers: this._headers,
      ...options,
    }).then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getUserInfo() {
    return this._request("users/me");
  }

  updateUserInfo(data) {
    return this._request("users/me", {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }

  updateAvatar(data) {
    return this._request("users/me/avatar", {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }

  getInitialCards() {
    return this._request("cards");
  }

  addCard(data) {
    return this._request("cards", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  deleteCard(cardId) {
    return this._request(`cards/${cardId}`, {
      method: "DELETE",
    });
  }

  likeCard(cardId) {
    return this._request(`cards/${cardId}/likes`, {
      method: "PUT",
    });
  }

  unlikeCard(cardId) {
    return this._request(`cards/${cardId}/likes`, {
      method: "DELETE",
    });
  }
}

export default Api;
