import Todo from "./Todo";

/**
 * TodoContext의 Props 타입
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
    }
}

export default TodoContextProps