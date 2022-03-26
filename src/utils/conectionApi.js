import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const url = 'http://192.168.0.85:8000/api/v1/';
// const url = 'http://192.168.1.222:8000/api/v1/';

export const register = async user => {
    let resp = {};
    await axios.post(`${url}users/register/`, user).then(
        response => {
            resp = { 'message': response.data.detail, 'status': true };
        },
        error => {
            if (error.response.status == 400) {
                let message = "";
                if (error.response.data.email) {
                    message = message.concat(error.response.data.email[0]);
                }
                if (error.response.data.username) {
                    message = message.concat(`\n${error.response.data.username[0]}`);
                }
                resp = { 'message': message, 'status': false, 'code': 400 };
                return;
            }
            resp = { 'message': "Algo salió mal, intentalo de nuevo más tarde", 'status': false, 'code': 500 };
            return;
        }
    );
    return resp;
}

export const list_automobile = async () => {
    let resp = [];
    await axios.get(`${url}automobiles/automobiles-mobile/`).then(
        response => {
            resp = response.data.results;
        },
        error => {
            console.log(error);
        }
    );
    return resp;
}

export const login = async user => {
    let res = await axios.post(`${url}users/token/`, user).then(
        response => {
            set_token(response.data.access);
            return profile_user(response.data.access);
        }
    ).catch(
        error => {
            console.log(error.response.status == 401);
            if (error.response.status) {
                return { status: false, data: null, code: error.response.status }
            }
            return { status: false, data: null, code: 500 }
        }
    );
    return res;
}

export const profile_user = async token => {
    let res = await axios.get(`${url}users/profile-mobile/`, { headers: { Authorization: `JWT ${token}` } }).then(
        response => {
            return { status: true, data: response.data, code: response.status };
        }
    ).catch(
        error => {
            if (error.response.status == 401) {
                return { status: false, data: null, code: error.response.status }
            }
            return { status: false, data: null, code: 500 }
        }
    );
    return res;
}

const set_token = async token => {
    try {
        await AsyncStorage.setItem('$token_user', token);
    } catch (error) {
        console.log(error);
    }
}