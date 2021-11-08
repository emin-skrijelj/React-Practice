import axios from "axios";

export const API = axios.create({
    baseURL: "https://newsapi.org/v2/top-headlines?q=trump&apiKey=925113db1d364aa48357898052882a4a"
})

export default API