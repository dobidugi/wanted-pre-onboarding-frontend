import { css } from '@emotion/react';
import React from 'react'
import Button from '../../components/common/Button';
import LabelInput from '../../components/common/LabelInput';
import SignSubmitButtonStyle from '../../style/SignSubmitButtonStyle';

function InputForm() {
    return (
        <form
            css={style}
        >
            <LabelInput
                label="이메일"
                input={{
                    type: "email",
                    name: "email",
                    testId: "email-input"
                }}
            />
            <LabelInput
                label="비밀번호"
                input={{
                    type: "password",
                    name: "password",
                    testId: "password-input"
                }}
            />
            <Button
                type="submit"
                testId="signin-button"
                css={SignSubmitButtonStyle}
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