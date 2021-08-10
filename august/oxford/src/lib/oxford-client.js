const axios = require("axios");

class OxfordClient {
  constructor(appId, apiKey) {
    this.apiId = appId;
    this.apiKey = apiKey;

    this.baseURL = "https://od-api.oxforddictionaries.com/api/v2/";
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        app_id: this.apiId,
        app_key: this.apiKey,
      },
    });
  }

  async get(endpoint) {
    const data = await this.client
      .get(endpoint)
      .then((res) => res.data)
      .catch(({ response }) => Promise.reject(response));

    return data;
  }

  async getEntry(word) {
    const endpoint = `entries/en-us/${word}`;
    return await this.get(endpoint);
  }
}

module.exports = OxfordClient;
