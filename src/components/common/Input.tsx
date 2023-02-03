import { css } from '@emotion/react';
import React from 'react'
import InputProps from '../../types/InputProps';
import BaseProps from '../../types/BaseProps';

/**
 * input 태그 컴포넌트
 * @param props - input 태그의 속성들
 * @returns 
 */
function Input(props: InputProps & BaseProps) {
    return (
        <input
            css={style}
            {...props}
            className={props?.className}
            data-testid={props?.testId}
        />
    )
}

const style = css`
    width: 100%;
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid var(--grey-200);
    
    &:focus {
        border: 1px solid var(--green-200);
    }
`

export default Input;