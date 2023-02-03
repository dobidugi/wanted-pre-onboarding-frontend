import { css } from '@emotion/react'
import React from 'react'

interface SignWrapperProps {
    type: '로그인' | '회원가입'
    children: React.ReactNode
}


/**
 * 회원가입, 로그인 박스를 감싸는 컴포넌트
 * @param props.children - 자식 컴포넌트
 * @param props.type - 로그인, 회원가입 여부
 * @returns 
 */
function SignWrapper(props: SignWrapperProps) {
    return (
        <section css={style}>
            <h1>{props.type}</h1>
            {props.children}
        </section>
    )
}

const style = css`
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 600px;
    background-color: var(--white);
    h1 {
        margin: 3rem 0 3rem 0;
        font-weight: 800;
        font-size: 1.5rem;
    }
    @media screen and (min-width: 768px) {
        min-width: 400px;
        max-width: 400px;
        border-radius: 8px;
        border: 1px solid var(--grey-200);
    }

    @media screen and (max-width: 767px) {
        width: 100%;
        background-color: var(--white);
    }
`

export default SignWrapper