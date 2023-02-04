import Todo from "../../../types/Todo";
import customAxios from "../../customAxios";
/**
 * /todo
 * 새로운 todo를 생성하는 API
 * @param todo - todo 내용
 * @returns 
 */
function createTodo(todo: string): Promise<Todo> {
    const axios = customAxios();
    const access_token = localStorage.getItem("access_token");
    return axios({
        method: "POST",
        url: "/todos",
        headers: {
            Authorization: `Bearer ${access_token}`
        },
        data: {
            todo
        }
    }).then(res => res.data);
}

export default createTodo;