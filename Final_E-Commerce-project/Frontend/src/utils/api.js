import axios from "axios";
import getConfig from "./config";

const { apiUrl } = getConfig();

const api = axios.create({
  baseURL: apiUrl,
  headers: { 
    'Authorization': 'Bearer <JWT-token-here>'
  }
});

const _helper = async (endpoint, method = "GET", ...args) => {
  try {
    switch (method) {
      case "GET":
        return await api.get(endpoint, ...args);
      case "POST":
        return await api.post(endpoint, ...args);
      default:
        throw new Error({ message: "Something went wrong" });
    }
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

// you can write all the API methods to make calls to your backend server

const getProducts = async () => {
  return await _helper("/api/v1/products", "GET", { timeout: 5000 });
};

export { getProducts };
