import Todo from "../../../types/Todo";
import customAxios from "../../customAxios";

/**
 * /todos
 * 모든 todo를 가져오는 API
 * @returns 
 */
function fetchTodos(): Promise<Todo[]> {
    const axios = customAxios();
    const access_token = localStorage.getItem("access_token");
    return axios({
        method: "GET",
        url: "/todos",
        headers: {
            Authorization: `Bearer ${access_token}`
        },
    }).then(res => res.data);
}

export default fetchTodos;