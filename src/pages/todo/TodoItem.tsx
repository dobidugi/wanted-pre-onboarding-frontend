import { css } from '@emotion/react';
import React, { useCallback, useContext } from 'react'
import Todo from '../../types/Todo';
import Button from '../../components/common/Button';
import TodoContext from '../../store/TodoContext';

function TodoItem(props: Todo) {
    const { todos } = useContext(TodoContext);
    const { onDelete, onUpdate } = todos;
    // const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const onClickCheckBox = useCallback((id: number) => {
        const newTodo: Todo = {
            ...props,
            isCompleted: !props.isCompleted
        }
        onUpdate(newTodo);
    }, [onUpdate, props]);
    return (
        <li css={style}>
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
            <Button
                type="button"
                testId="modify-button"
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

    button[data-testid="delete-button"] {
        background-color: var(--coral);
    }

    button[data-testid="delete-button"]:hover {
        background-color: var(--red-400);
    }

    
`
export default TodoItem