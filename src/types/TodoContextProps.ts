import Todo from "./Todo";

/**
 * TodoContext의 Props 타입
 * @interface TodoContextProps
 * @property {object} newTodo - 새로운 Todo를 추가하는 Input
 * @property {string} newTodo.value - 새로운 Todo의 값
 * @property {function} newTodo.onChange - 새로운 Todo의 값이 변경될 때 호출되는 함수
 * @property {function} newTodo.onSubmit - 새로운 Todo를 추가할 때 호출되는 함수
 * @property {object} todos - Todo 리스트
 * @property {Todo[]} todos.todoList - Todo 리스트
 * @property {function} todos.onDelete - Todo를 삭제할 때 호출되는 함수
 * @property {function} todos.onChangeChecked - Todo의 체크박스를 변경할 때 호출되는 함수
 */
interface TodoContextProps {
    newTodo: {
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    },
    todos: {
        todoList: Todo[];
        onDelete: (id: number) => void;
        onUpdate: ( newTodo: Todo) => void;
    }
}

export default TodoContextProps