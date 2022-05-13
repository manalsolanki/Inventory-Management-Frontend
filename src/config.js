import Axios from "axios";

const axios = Axios.create({
    // baseURL: process.env.REACT_APP_LOCAL_URL, headers: { "Authorization": localStorage.getItem('token') }
    baseURL: process.env.REACT_APP_BASEURL, headers: { "Authorization": localStorage.getItem('token'), "UserId": localStorage.getItem('userid') }
})

export default axios 