import axios from "axios";
import { UserCache } from "../cache";
import { URL } from "../config/Constants";

const Token = async () => { return await UserCache.getToken(); }

axios.defaults.baseURL = URL;
axios.defaults.headers = { Authorization: `JWT ${Token()}`, ContentType: 'application/json' };

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.response.data.detail) {
            console.log(error.response.data.detail);
        }
        if (error.response.status == 500) {
            console.log(error.response.status);
        }
        return Promise.reject(error);
    }
);

console.log(axios);

export default axios;
