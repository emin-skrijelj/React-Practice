import axios from "axios";

export const API = axios.create({
    baseURL: "https://quotable.io/"
})

export default API