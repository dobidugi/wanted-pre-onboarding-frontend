import { css } from "@emotion/react";

/**
 * 회원가입, 로그인 페이지의 Submit 버튼 스타일
 */
const SignSubmitButtonStyle = css`
    margin-top: 1rem;
    cursor: pointer;
    width: 100%;
    text-align: center;
    height: 48px;
    background-color: var(--green-200);
    border-radius: 4px;
    color: var(--white);
    &:hover {
        background-color: var(--green-300);
    }

    &:disabled {
        color: var(--grey-300);
        background-color: var(--grey-200);
        cursor: not-allowed;
    }
`
export default SignSubmitButtonStyle;