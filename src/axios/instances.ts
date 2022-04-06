import axios from "axios";

export const APP_URL = `${process.env.REACT_APP_API_KEY}/${process.env.REACT_APP_API_VERSION}`;

const apiConfig = {
  baseURL: APP_URL,
};

const localApiConfig = {
  baseURL: "http://localhost:3000/",
};

const api = axios.create({ ...apiConfig });

const localApi = axios.create({ ...localApiConfig });

export { api, localApi };
