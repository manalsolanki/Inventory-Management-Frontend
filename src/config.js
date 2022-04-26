import Axios from "axios";

const axios = Axios.create({
    baseURL: process.env.REACT_APP_BASEURL, headers: { "Authorization": localStorage.getItem('token') }
    // baseURL: process.env.REACT_APP_LOCAL_URL, headers: { "Authorization": cookies.get('token') }
})

export default axios 