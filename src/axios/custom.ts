import axios from "axios";

const customFetch = axios.create({
    baseURL: "https://express-bio-path.vercel.app",
    headers: {
        Accept: "application/json"
    }
})

export default customFetch;