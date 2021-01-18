import axios from "axios";

// used before each request to the tmbd database
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
