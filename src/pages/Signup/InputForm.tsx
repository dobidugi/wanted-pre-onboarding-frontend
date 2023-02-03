import { css } from '@emotion/react'
import React from 'react'
import Button from '../../components/common/Button'
import LabelInput from '../../components/common/LabelInput'
import SignSubmitButtonStyle from '../../style/SignSubmitButtonStyle'

/**
 * 회원가입 입력 폼 컴포넌트
 * 확장을 위해 Signin/InputForm.tsx와 공용으로 사용하지않음 
 * @returns 
 */
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
                testId="signup-button"
                css={SignSubmitButtonStyle}
            >
                회원 가입
            </Button>
        </form>
    )
}

const style = css`
    width: 100%;
`

export default InputForm;