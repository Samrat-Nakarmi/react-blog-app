import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:1337/",

  // baseURL: "https://softwareapi.deerwalk.edu.np",
});
