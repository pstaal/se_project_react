class Api {
    constructor({ baseUrl, headers }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
      this._section = null;
    }
  
    _handleResponse(res) {
      return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    }

    getItems() {
        return fetch(`${this._baseUrl}/items`, {
          method: "GET",
          headers: {
            ...this._headers,
          },
        }).then((res) => this._handleResponse(res));
      }

      addItem(name, imageUrl, weather) {
        return fetch(`${this._baseUrl}/items`, {
          method: "POST",
          headers: {
            ...this._headers,
          },
          body: JSON.stringify({name, imageUrl, weather})
        }).then((res) => this._handleResponse(res));
      }

    deleteItem(id) {
        return fetch(`${this._baseUrl}/items/${id}`, {
          method: "DELETE",
          headers: {
            ...this._headers,
          },
        }).then((res) => this._handleResponse(res));
    }
  
  }
  
  //initalize api instance
  const api = new Api({
    baseUrl: 'http://localhost:3001',
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  export default api;