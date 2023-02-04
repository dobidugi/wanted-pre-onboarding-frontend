import { css } from '@emotion/react'
import React from 'react'
import BaseProps from '../../types/BaseProps';


/**
 * 에러 메시지 컴포넌트
 * @param props.children - 에러 메시지 
 * @returns 
 */
function Error(props: { value?: string } & BaseProps) {
    return (
        <p
            className={props?.className}
            css={css`
                color: red;
                font-size: 0.85rem;
                margin-bottom: 0.5rem;
            `}
        >
            {props?.value}
        </p>
    )
}

export default Error