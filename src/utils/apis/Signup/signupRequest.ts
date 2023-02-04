import { AxiosResponse } from "axios";
import customAxios from "../../customAxios";
import User from '../../../types/User';

/**
 * /auth/signup
 * 회원가입 요청 API
 * @param user - 회원가입 폼 값
 * @returns 
 */
function signupRequest(user: User): Promise<AxiosResponse> {
    const axios = customAxios();
    return axios({
        method: "POST",
        url: "/auth/signup",
        data: {
            email: user.email,
            password: user.password,
        }
    })
}

export default signupRequest;