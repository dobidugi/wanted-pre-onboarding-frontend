/**
 * Todo 타입
 * @typedef {Object} Todo
 * @property {number} id - Todo id
 * @property {string} todo - Todo 내용
 * @property {boolean} isCompleted - Todo 완료 여부
 * @property {number} userId - Todo를 생성한 유저 id
 */
interface Todo {
    id: 1,
    todo: string,
    isCompleted: boolean,
    userId: number
}

export default Todo