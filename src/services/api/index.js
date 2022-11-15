import axios from "axios";

const config = {
    headers:{
        Key: process.env.REACT_APP_KEY_API,
    }
};

const get = async (url, params) => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL_API}${url}`, config)
    return res.data
}

export default get;