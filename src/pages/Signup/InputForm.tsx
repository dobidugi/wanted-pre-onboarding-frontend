import { css } from "@emotion/react";
import React, { useCallback, useMemo } from "react";
import Button from "../../components/common/Button";
import LabelInput from "../../components/common/LabelInput";
import { SignupContext } from "../../store/SignupContext";
import SignSubmitButtonStyle from "../../style/SignSubmitButtonStyle";
import Error from "../../components/common/Error";
import InputType from "../../types/InputType";

/**
 * 회원가입 입력 폼 컴포넌트
 * 확장을 위해 Signin/InputForm.tsx와 공용으로 사용하지않음 
 * @returns 
 */
function InputForm() {
    const { values, onChange, onSubmit, errors } = React.useContext(SignupContext);
    const inputs: InputType[] = useMemo(() =>
        [
            {
                label: "이메일",
                input: {
                    type: "text",
                    name: "email",
                    testId: "email-input",
                    value: values.email,
                    placeholder: "이메일을 입력하세요",
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
            onSubmit={onSubmit}
            css={style}
        >
            {inputs.map((input, index) => (
                <div className="item">
                    <LabelInput
                        key={index}
                        label={input.label}
                        input={input.input}
                    />
                    <Error
                        value={input.error}
                    />
                </div>
            ))
            }
            <Button
                type="submit"
                testId="signup-button"
                css={SignSubmitButtonStyle}
                isDisabled={isInvalidValues()}
            >
                회원 가입
            </Button>
        </form >
    );
}

const style = css`
    width: 100%;

`;

export default InputForm;