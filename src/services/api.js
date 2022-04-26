import axios from "axios";

const api = axios.create({
  baseURL: "https://us-central1-ss-devops.cloudfunctions.net",
});

export default api;
