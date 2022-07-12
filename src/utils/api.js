class Api {
  constructor({baseUrl, headers, credentials}) {
    this._baseUrl = baseUrl
    this._headers = headers
    this._credentials = credentials
  }

  _getResponseData(res) {
    return !res.ok ? Promise.reject(`Ошибка: ${res.status}`) : res.json()
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: this._credentials,
    })
      .then(res => this._getResponseData(res))
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      credentials: this._credentials,
    })
      .then(res => this._getResponseData(res))
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: !isLiked ? 'DELETE' : 'PUT',
      headers: this._headers,
      credentials: this._credentials,
    })
      .then(res => this._getResponseData(res))
  }

  setUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      }),
      credentials: this._credentials,
    })
      .then(res => this._getResponseData(res))
  }

  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      }),
      credentials: this._credentials,
    })
      .then(res => this._getResponseData(res))
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: this._credentials,
    })
      .then(res => this._getResponseData(res))
  }

  setUserAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      }),
      credentials: this._credentials,
    })
      .then(res => this._getResponseData(res))
  }
}

export const api = new Api({
  baseUrl: 'https://tsverkunov-mesto-b.nomorepartiesxyz.ru',
  headers: {
    // authorization: 'e0347de3-3f3e-4b66-951f-031aa57f2a82',
    'Content-Type': 'application/json'
  },
  credentials: 'include',
})
