import axios from "axios";

const apiHost = 'http://localhost:1337/api'
const apiToken = "SET API KEY"


export const makeRequest = axios.create({
    baseURL: apiHost,
    headers: {
        Authorization: "bearer " + apiToken,
    },
})