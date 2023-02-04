
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import GreyBackgroundWrapper from '../../components/common/GreyBackgroundWrapper'
import SignWrapper from '../../components/common/SignWrapper'
import useValid from '../../hooks/useValid';
import SigninContext from '../../store/SigninContex';
import User from '../../types/User';
import signinRequest from '../../utils/apis/Signin/signinRequest';
import UserValidator from '../../utils/validator/UserValidator';
import InputForm from './InputForm'
import ErrorResponse from '../../types/ErrorResponse';
import Error from '../../components/common/Error';
import { error } from 'console';
import { css } from '@emotion/react';

/**
 * /signin
 * 로그인 페이지 컴포넌트
 * @returns 
 */
function Index() {
    const navigator = useNavigate();
    const [failMessage, setFailMessage] = useState<string>('');
    const { values, errors, onChange } = useValid<User>({
        values: {
            email: '',
            password: '',
        },
        validator: UserValidator
    })

    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signinRequest(values)
            .then((response: { access_token: string }) => {
                console.log(response.access_token);
            })
            .catch(({ response }) => {
                const { data }: { data: ErrorResponse } = response
                setFailMessage(data.message);
            });
    }, [values]);

    return (
        <main css={
            css`
                .request-error { margin-top: 1rem;}  
            `
        }>
            <SigninContext.Provider value={{ values, onChange, onSubmit, errors }}>
                <GreyBackgroundWrapper
                    className='wrapper-center'
                >
                    <SignWrapper
                        type="로그인"
                    >
                        <InputForm />
                        <Error
                            className="request-error"
                            value={failMessage}
                        />
                    </SignWrapper>
                </GreyBackgroundWrapper>
            </SigninContext.Provider>
        </main>

    )
}

export default Index