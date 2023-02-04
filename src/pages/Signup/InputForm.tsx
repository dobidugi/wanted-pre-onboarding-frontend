import { css } from "@emotion/react";
import React from "react";
import Button from "../../components/common/Button";
import LabelInput from "../../components/common/LabelInput";
import { SignupContext } from "../../store/SignupContext";
import SignSubmitButtonStyle from "../../style/SignSubmitButtonStyle";
import BaseProps from "../../types/BaseProps";
import InputProps from "../../types/InputProps";

interface inputsType {
    label: string;
    input: InputProps & BaseProps
}

/**
 * 회원가입 입력 폼 컴포넌트
 * 확장을 위해 Signin/InputForm.tsx와 공용으로 사용하지않음 
 * @returns 
 */
function InputForm() {
    const { values, onChange, onSubmit } = React.useContext(SignupContext);
    const inputs: inputsType[] = [
        {
            label: "이메일",
            input: {
                type: "email",
                name: "email",
                testId: "email-input",
                value: values.email,
                onChange: onChange,
            }
        },
        {
            label: "비밀번호",
            input: {
                type: "password",
                name: "password",
                testId: "password-input",
                value: values.password,
                onChange: onChange,
            }
        },
    ]
    return (
        <form
            onSubmit={onSubmit}
            css={style}
        >
            {inputs.map((input, index) => (
                <LabelInput
                    key={index}
                    label={input.label}
                    input={input.input}
                />
            ))}
            <Button
                type="submit"
                testId="signup-button"
                css={SignSubmitButtonStyle}
            >
                회원 가입
            </Button>
        </form>
    );
}

const style = css`
    width: 100%;
`;

export default InputForm;