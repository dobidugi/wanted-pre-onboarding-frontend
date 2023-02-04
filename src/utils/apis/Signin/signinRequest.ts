import customAxios from "../../customAxios";
import User from '../../../types/User';

/**
 * /auth/signin
 * 로그인 요청 API
 * @param user - 로그인 폼 값
 * @returns 
 */
function signupRequest(user: User): Promise<{ access_token: string}> {
    const axios = customAxios();
    return axios({
        method: "POST",
        url: "/auth/signin",
        data: {
            email: user.email,
            password: user.password,
        }
    }).then( res => res.data);
}

export default signupRequest;