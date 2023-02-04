import { css } from '@emotion/react'
import React from 'react'
import BaseProps from '../../types/BaseProps';

/**
 * 회색 배경을 가지고 컴포넌트를 감싸는 컴포넌트
 * @param props.children - 자식 컴포넌트
 * @param props.className - 추가할 클래스 이름 (옵션)
 * @returns 
 */
function GreyBackgroundWrapper(props: { children: React.ReactNode } & BaseProps) {
    return (
        <div
            className={`${props?.className} grey-background-wrapper`}
            css={style}
        >
            {props.children}
        </div>
    )
}
const style = css`
    width: 100%;
    height: 100vh;
    background-color: var(--grey-100);
`

export default GreyBackgroundWrapper