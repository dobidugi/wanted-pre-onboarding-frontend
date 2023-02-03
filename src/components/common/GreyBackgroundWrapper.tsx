import { css } from '@emotion/react'
import React from 'react'
import BaseProps from '../../types/BaseProps';

function GreyBackgroundWrapper(props: { children: React.ReactNode } & BaseProps) {
    return (
        <div
            className={props?.className}
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