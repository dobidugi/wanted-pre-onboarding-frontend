import { css } from '@emotion/react';
import React, { useCallback, useEffect, useState } from 'react'
import GreyBackgroundWrapper from '../../components/common/GreyBackgroundWrapper';
import TodoContext from '../../store/TodoContext';
import NewTodoForm from './NewTodoForm';
import createTodo from '../../utils/apis/Todo/createTodo';
import Todo from '../../types/Todo';
import fetchTodos from '../../utils/apis/Todo/fetchTodos';
import TodoList from './TodoList';
import deleteTodo from '../../utils/apis/Todo/deleteTodo';
import updateTodo from '../../utils/apis/Todo/updateTodo';
import Error from '../../components/common/Error';
import ErrorResponse from '../../types/ErrorResponse';
/**
 * /todo
 * todo 컴포넌트
 * @returns 
 */
function Index() {
    const [newTodo, setNewTodo] = useState<string>("");
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [error, setError] = useState<string>("");
    useEffect(() => {
        fetchTodos()
            .then((todos) => {
                setTodoList(todos);
            })
    }, []);


    const onChangeNewTodo = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }, []);

    const addTodoHandler = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createTodo(newTodo)
            .then((todo) => {
                setTodoList([...todoList, todo]);
                setNewTodo("");
                setError("");
            })
            .catch(({ response }) => {
                const { data }: { data: ErrorResponse } = response;
                setError(data.message);
            });
    }, [newTodo, todoList]);

    const deleteTodoHandler = useCallback((id: number) => {
        deleteTodo(id)
            .then((response) => {
                if (response.status === 204) {
                    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
                }
            })
    }, []);

    const updateTodoHandler = useCallback((newTodo: Todo) => {
        updateTodo(newTodo)
            .then((response) => {
                if (response.status === 200) {
                    setTodoList((prev) => prev.map((todo) => todo.id === newTodo.id ? newTodo : todo));
                }
                setError("");
            }).catch(({ response }) => {
                const { data }: { data: ErrorResponse } = response;
                setError(data.message);
            });
    }, []);

    return (
        <TodoContext.Provider value={{
            newTodo: {
                value: newTodo,
                onChange: onChangeNewTodo,
                onSubmit: addTodoHandler,
            },
            todos: {
                todoList,
                onDelete: deleteTodoHandler,
                onUpdate: updateTodoHandler,
            }
        }}>
            <GreyBackgroundWrapper
                css={style}
                className={'wrapper-center content'}
            >
                <main>
                    <h1>TodoList</h1>
                    <NewTodoForm />
                    <Error
                        className='error'
                        value={error}
                    />
                    <TodoList />
                </main>
            </GreyBackgroundWrapper>
        </TodoContext.Provider>
    )
}

const style = css`  
    main {
        min-width: 768px;
        .error {
            margin-top: 0.5rem;
        }
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    
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

    @media screen and (max-width: 767px){
        main {
            padding: 1rem;
            min-width: unset;
            width: 100%;
        }
    }
`

export default Index;