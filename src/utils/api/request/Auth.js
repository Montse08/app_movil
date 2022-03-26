import axios from "axios"
import { Technical } from ".";
import { UserCache } from "../../cache";
import { Constants } from "../../config";

export const register = async user => {
    return await axios.post(`${Constants.URL}${Constants.ROUTES.users}register/`, user)
        .then(response => {
            return { message: response.data.detail, status: true, code: response.status };
        })
        .catch(error => {
            if (error.response == undefined) {
                return Constants.RESPONSES_CODE_521;
            } else if (error.response.status == 400) {
                let message = "";
                if (error.response.data.email) {
                    message = message.concat(error.response.data.email[0]);
                }
                if (error.response.data.username) {
                    message = message.concat(`\n${error.response.data.username[0]}`);
                }
                return { message: message, status: false, code: 400 };
            }
            return Constants.RESPONSES_CODE_500;
        })
}

export const login = async credentials => {
    return await axios.post(`${Constants.URL}${Constants.ROUTES.users}token/`, credentials).then(
        async response => {
            await UserCache.setToken(response.data.access);
            return Technical.getProfile();
        }
    ).catch(
        error => {
            if (error.response == undefined) {
                return Constants.RESPONSES_CODE_521;
            }
            if (error.response.status == 401) {
                return { status: false, message: "El correo o contraseña son incorrectos, revisa tus credenciales e intentalo de nuevo", code: error.response.status }
            }
            return Constants.RESPONSES_CODE_500;
        }
    );
}