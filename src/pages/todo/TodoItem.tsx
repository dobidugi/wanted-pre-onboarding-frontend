import { css } from '@emotion/react';
import React, { useCallback, useContext, useState } from 'react'
import Todo from '../../types/Todo';
import Button from '../../components/common/Button';
import TodoContext from '../../store/TodoContext';
import Input from '../../components/common/Input';

function TodoItem(props: Todo) {
    const { todos } = useContext(TodoContext);
    const { onDelete, onUpdate } = todos;
    const [todo, setTodo] = useState<string>(props.todo);
    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    const onChangeTodo = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    }, [])

    const onClickCheckBox = useCallback((id: number) => {
        const newTodo: Todo = {
            ...props,
            isCompleted: !props.isCompleted
        }
        onUpdate(newTodo);
    }, [onUpdate, props]);

    const onModifyTodo = useCallback(() => {
        const newTodo: Todo = {
            ...props,
            todo: todo
        }
        onUpdate(newTodo);
        setIsEditMode(false);
    }, [onUpdate, props, todo])

    const onChangeEditModeState = useCallback((state: boolean) => {
        if (state === true) {
            setTodo(props.todo);
        }
        setIsEditMode(() => state);
    }, [props.todo]);

    return (
        <li css={style}>
            {
                isEditMode ?
                    <React.Fragment>
                        <input
                            type="checkbox"
                            defaultChecked={props.isCompleted}
                            onClick={() => onClickCheckBox(props.id)}
                        />
                        <Input
                            type="text"
                            name="editTodo"
                            testId="modify-input"
                            value={todo}
                            onChange={onChangeTodo}
                        />
                    </React.Fragment>
                    :
                    <label>
                        <input
                            type="checkbox"
                            defaultChecked={props.isCompleted}
                            onClick={() => onClickCheckBox(props.id)}
                        />
                        <span
                            className={`${props.isCompleted ? "checked" : ""}`}>
                            {props.todo}
                        </span>
                    </label>
            }

            {
                isEditMode ?
                    <React.Fragment>
                        <Button
                            type="button"
                            testId="submit-button"
                            onClick={onModifyTodo}
                        >
                            제출
                        </Button>
                        <Button
                            type="button"
                            testId="cancel-button"
                            onClick={() => onChangeEditModeState(false)}
                        >
                            취소
                        </Button>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <Button
                            type="button"
                            testId="modify-button"
                            onClick={() => onChangeEditModeState(true)}
                        >
                            수정
                        </Button>
                        <Button
                            type="button"
                            testId="delete-button"
                            onClick={() => onDelete(props.id)}
                        >
                            삭제
                        </Button>
                    </React.Fragment>
            }
        </li>
    )
}

const style = css`
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0.5rem;
    min-height: 48px;
    width: 100%;
    border-radius: 4px;
    background-color: var(--white);
    label {
        width: 100%;
        height: 100%;
        span {
            font-size: 1rem;
            margin-left: 0.5rem;
        }
        
        span.checked {
            text-decoration: line-through;
        }

        input {
            cursor: pointer;
        }
    }
    button {
        margin-left: 0.5rem;
        min-width: 4rem;
        height: 48px;
        color: var(--white);
    }

    button[data-testid="modify-button"] {
        background-color: var(--blue-200);
    }

    button[data-testid="modify-button"]:hover {
        background-color: var(--blue-300);
    }

    button[data-testid="delete-button"], button[data-testid="cancel-button"] {
        background-color: var(--coral);
    }

    button[data-testid="delete-button"]:hover, button[data-testid="cancel-button"]:hover {
        background-color: var(--red-400);
    }

    button[data-testid="submit-button"] {
        background-color: var(--green-200);
    }

    button[data-testid="submit-button"]:hover {
        background-color: var(--green-300);
    }

    
`
export default TodoItem