interface TodoContextProps {
    newTodo: {
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    }
}

export default TodoContextProps