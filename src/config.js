import Axios from "axios";


const axios = Axios.create({
    baseURL: process.env.REACT_APP_BASEURL
})

export default axios 