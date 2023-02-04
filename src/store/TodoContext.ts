import { createContext } from "react";
import TodoContextProps from "../types/TodoContextProps";

const TodoContext = createContext<TodoContextProps>({
    newTodo: {
        value: "",
        onChange: () => {},
        onSubmit: () => {},
    },
    todos: {
        todoList: [],
        onDelete: () => {},
        onUpdate: () => {}
    }
});

export default TodoContext;