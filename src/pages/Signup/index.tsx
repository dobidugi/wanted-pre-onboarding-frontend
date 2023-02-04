import React, { useCallback, useState } from "react";
import GreyBackgroundWrapper from "../../components/common/GreyBackgroundWrapper";
import SignWrapper from "../../components/common/SignWrapper";
import InputForm from "./InputForm";
import { SignupContext } from "../../store/SignupContext";
import useValid from "../../hooks/useValid";
import UserValidator from "../../utils/validator/UserValidator";
import User from "../../types/User";
import signupRequest from '../../utils/apis/Signup/signupRequest';
import { useNavigate } from "react-router-dom";
import ContentResponsiveStyle from '../../style/ContentResponsiveStyle';
import Error from "../../components/common/Error";
import ErrorResponse from '../../types/ErrorResponse';
import { css } from "@emotion/react";

/**
 * /signup
 * 회원가입 페이지 컴포넌트
 * @returns 
 */
function Index() {
    const navigator = useNavigate();
    const [error, setError] = useState<string>('');
    const { values, errors, onChange } = useValid<User>({
        values: {
            email: '',
            password: '',
        },
        validator: UserValidator
    })


    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signupRequest(values)
            .then((response) => {
                navigator('/signin');
            })
            .catch(({ response }) => {
                const { data }: { data: ErrorResponse } = response;
                setError(data.message);
            })
    }, [navigator, values]);

    return (

        <SignupContext.Provider value={{ values, onChange, onSubmit, errors }}>
            <GreyBackgroundWrapper
                className='wrapper-center'
                css={ContentResponsiveStyle}
            >
                <main>
                    <SignWrapper
                        type="회원가입"
                    >
                        <InputForm />
                        <Error
                            css={css`
                                margin-top: 1rem;
                            `}
                            value={error}
                        />
                    </SignWrapper>
                </main>
            </GreyBackgroundWrapper>
        </SignupContext.Provider>

    );
}

export default Index;