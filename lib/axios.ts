import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export default axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
})

export const axiosAuth = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
})