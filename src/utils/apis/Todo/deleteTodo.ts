import customAxios from "../../customAxios";
import { AxiosResponse } from 'axios';

/**
 * /todos/:id
 * id를 이용해 todo를 삭제하는 API
 * @returns 
 */
function deleteTodo(id: number): Promise<AxiosResponse> {
    const axios = customAxios();
    const access_token = localStorage.getItem("access_token");
    return axios({
        method: "delete",
        url: `/todos/${id}`,
        headers: {
            Authorization: `Bearer ${access_token}`
        },
    });
}

export default deleteTodo;