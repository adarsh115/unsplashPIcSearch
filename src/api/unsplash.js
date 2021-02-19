import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 9gNpSiE1xZrgdk2c6FIL1XPtDpklf503uGoqXv-6c-w"
  }
});
