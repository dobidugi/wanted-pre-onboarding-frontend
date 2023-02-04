import customAxios from "../../customAxios";
import { AxiosResponse } from 'axios';
import Todo from '../../../types/Todo';

/**
 * /todos/:id
 * id를 이용해 todo를 업데이트 하는 API
 * @returns 
 */
function updateTodo(newTodo: Todo): Promise<AxiosResponse> {
    const axios = customAxios();
    const access_token = localStorage.getItem("access_token");
    return axios({
        method: "PUT",
        url: `/todos/${newTodo.id}`,
        headers: {
            Authorization: `Bearer ${access_token}`
        },
        data: {
            todo: newTodo.todo,
            isCompleted: newTodo.isCompleted
        }
    });
}

export default updateTodo;