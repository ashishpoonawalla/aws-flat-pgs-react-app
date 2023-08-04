import axios from "axios"

const newRequest = axios.create({
    baseURL: "http://13.53.35.179:8800/api/",
    withCredentials: true,
});

export default newRequest;