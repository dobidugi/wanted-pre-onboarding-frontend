import axios from "axios";

/**
 * Axios 기본 설정
 * @returns 
 */
function customAxios() {
    axios.defaults.baseURL = "https://pre-onboarding-selection-task.shop";
    axios.defaults.maxBodyLength =Infinity;
    axios.defaults.maxContentLength = Infinity;
    axios.defaults.headers.common["Content-Type"] = "application/json";
    return axios;
}

export default customAxios;