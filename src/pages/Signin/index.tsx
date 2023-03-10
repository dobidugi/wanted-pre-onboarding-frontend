
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
import ContentResponsiveStyle from '../../style/ContentResponsiveStyle';

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
                localStorage.setItem('access_token', response.access_token);
                navigator('/todo');
            })
            .catch(({ response }) => {
                const { data }: { data: ErrorResponse } = response
                setFailMessage(data.message);
            });
    }, [navigator, values]);

    return (

        <SigninContext.Provider value={{ values, onChange, onSubmit, errors }}>
            <GreyBackgroundWrapper
                className='wrapper-center'
                css={ContentResponsiveStyle}
            >
                <main css={css`
                .request-error { margin-top: 1rem;}  
                `}>
                    <SignWrapper
                        type="로그인"
                    >
                        <InputForm />
                        <Error
                            className="request-error"
                            value={failMessage}
                        />
                    </SignWrapper>
                </main>
            </GreyBackgroundWrapper>
        </SigninContext.Provider>
    )
}

export default Index