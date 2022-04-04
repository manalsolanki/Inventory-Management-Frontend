import Axios from "axios";
import React from "react";

const axios = Axios.create({
    baseURL: process.env.REACT_APP_BASEURL
})

export default axios 