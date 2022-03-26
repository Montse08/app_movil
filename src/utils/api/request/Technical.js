import axios from "../axios";

export const getProfile = () => {
    // return await axios.get(`${url}users/profile-mobile/`, { headers: { Authorization: `JWT ${token}` } }).then(
    //     response => {
    //         return { status: true, data: response.data, code: response.status };
    //     }
    // ).catch(
    //     error => {
    //         if (error.response.status == 401) {
    //             return { status: false, data: null, code: error.response.status }
    //         }
    //         return { status: false, data: null, code: 500 }
    //     }
    // );
    return axios.get(`${Constants.ROUTES.users}profile-mobile`);
}