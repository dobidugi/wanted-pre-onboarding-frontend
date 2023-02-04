import { css } from '@emotion/react';
import React, { useContext } from 'react'
import TodoContext from '../../store/TodoContext';
import TodoItem from './TodoItem';

/**
 * 투두 리스트
 * @returns 
 */
function TodoList() {
    const { todos } = useContext(TodoContext)
    return (
        <ul
            css={css`
                width: 100%;
                margin-top: 0.5rem;
            `}
        >
            {
                todos.todoList.map((todo) => (
                    <TodoItem key={todo.id} {...todo} />
                ))
            }
        </ul>
    )
}


export default TodoList