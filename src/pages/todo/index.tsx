import { css } from '@emotion/react';
import React, { useCallback, useState } from 'react'
import GreyBackgroundWrapper from '../../components/common/GreyBackgroundWrapper';
import TodoContext from '../../store/TodoContext';
import NewTodoForm from './NewTodoForm';
import createTodo from '../../utils/apis/Todo/createTodo';
import Todo from '../../types/Todo';

/**
 * /todo
 * todo 컴포넌트
 * @returns 
 */
function Index() {
    const [newTodo, setNewTodo] = useState<string>("");
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const onChangeNewTodo = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }, []);

    const addTodoHandler = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createTodo(newTodo)
            .then((todo) => {
                setTodoList([...todoList, todo]);
                setNewTodo("");
            })
    }, [newTodo, todoList]);


    return (
        <main css={style}>
            <TodoContext.Provider value={{
                newTodo: {
                    value: newTodo,
                    onChange: onChangeNewTodo,
                    onSubmit: addTodoHandler,
                }
            }}>
                <GreyBackgroundWrapper
                    className={'wrapper-center content'}
                >
                    <h1>TodoList</h1>
                    <NewTodoForm />
                </GreyBackgroundWrapper>
            </TodoContext.Provider>

        </main>
    )
}

const style = css`
    width: 100%;
    display: flex;
    .content {
        padding: 1rem;
        flex-direction: column;
    }
    h1 {
        font-size: 2rem;
        font-weight: 800;
        margin-bottom: 0.5rem;
    }

    button {
        cursor: pointer;
        text-align: center;
        margin-left: 0.5rem;
        border-radius: 4px;
    }
`

export default Index;