import Axios from "axios";
import { Cookies } from "react-cookie";
const cookies = new Cookies();

const axios = Axios.create({
    baseURL: process.env.REACT_APP_BASEURL, headers: { "Authorization": cookies.get('token') }
    // baseURL: process.env.REACT_APP_LOCAL_URL, headers: { "Authorization": cookies.get('token') }
})

export default axios 