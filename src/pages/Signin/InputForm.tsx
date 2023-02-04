import { css } from '@emotion/react';
import React, { useCallback, useContext, useMemo } from 'react'
import Button from '../../components/common/Button';
import LabelInput from '../../components/common/LabelInput';
import SigninContext from '../../store/SigninContex';
import SignSubmitButtonStyle from '../../style/SignSubmitButtonStyle';
import InputType from '../../types/InputType';
import Error from '../../components/common/Error';
/**
 * 로그인 입력 폼 컴포넌트
 * @returns 
 */
function InputForm() {
    const { values, onChange, onSubmit, errors } = useContext(SigninContext);
    const inputs: InputType[] = useMemo(() =>
        [
            {
                label: "이메일",
                input: {
                    type: "text",
                    name: "email",
                    testId: "email-input",
                    placeholder: "이메일을 입력하세요",
                    value: values.email,
                    onChange: onChange,
                },
                error: errors.email
            },
            {
                label: "비밀번호",
                input: {
                    type: "password",
                    name: "password",
                    testId: "password-input",
                    placeholder: "비밀번호를 입력하세요",
                    value: values.password,
                    onChange: onChange,
                },
                error: errors.password
            },
        ]
        , [errors.email, errors.password, onChange, values.email, values.password]);

    const isInvalidValues = useCallback(() => {
        if (values.email === "" || values.password === "") return true;
        if (errors.email !== "" || errors.password !== "") return true;
    }, [errors, values.email, values.password])

    return (
        <form
            css={style}
            onSubmit={onSubmit}
        >
            {inputs.map((input, index) => (
                <div
                    key={index}
                    className="item"
                >
                    <LabelInput
                        label={input.label}
                        input={input.input}
                    />
                    <Error
                        value={input.error}
                    />
                </div>

            ))}
            <Button
                type="submit"
                testId="signin-button"
                css={SignSubmitButtonStyle}
                isDisabled={isInvalidValues()}
            >
                로그인
            </Button>
        </form>
    )
}

const style = css`
    width: 100%;
`

export default InputForm