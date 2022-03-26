import axios from "axios";
import { UserCache } from "../../cache";
import { Constants } from "../../config";

const getToken = async () => await UserCache.getToken();

export const getAutomobiles = async () => {
    let token = await getToken();
    return await axios.get(`${Constants.URL}${Constants.ROUTES.automobiles}automobiles-mobile/`, { headers: { Authorization: `JWT ${token}` } })
        .then(
            response => {
                return { data: response.data.results };
            }
        )
        .catch(
            error => {
                if (error.response == undefined) {
                    return Constants.RESPONSES_CODE_521;
                } else if (error.response.status == 401) {
                    return { status: false, message: error.response.detail, code: error.response.status }
                }
                return Constants.RESPONSES_CODE_500;
            }
        );
}