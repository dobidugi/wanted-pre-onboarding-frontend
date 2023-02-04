import React, { useContext } from 'react'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button';
import { css } from '@emotion/react';
import TodoContext from '../../store/TodoContext';

/**
 * 새로운 todo를 작성하는 컴포넌트
 * @returns 
 */
function NewTodoForm() {
    const { newTodo } = useContext(TodoContext);
    const { value, onChange } = newTodo;
    return (
        <form
            css={style}
        >
            <Input
                type="text"
                name="new-todo"
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
                testId="new-todo-input"
            />
            <Button
                type="submit"
                testId="new-todo-add-button"
            >
                추가
            </Button>
        </form>
    )
}

const style = css`
    display: flex;
    
    button {
        background-color: var(--green-200);
        color: var(--white);
    }

    @media (min-width: 768px) {
        flex-direction: row;
        button {
            width: 5rem;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        button {
            width: 100%;
            margin-left: 0;
            height: 48px;
            margin-top: 0.5rem;
        }
    }
`

export default NewTodoForm