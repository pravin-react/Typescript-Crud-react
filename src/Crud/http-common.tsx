import axios from "axios";
export default axios.create({
  baseURL: "https://62f37b4aa84d8c9681244fcd.mockapi.io/api/v1",
  headers: {
    "Content-type": "application/json"
  }
});