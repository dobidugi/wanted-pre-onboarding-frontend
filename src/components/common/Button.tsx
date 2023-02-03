import React from 'react'
import BaseProps from '../../types/BaseProps';

interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    isDisabled?: boolean;
    onClick?: () => void;
}

/**
 * 버튼 컴포넌트
 * @param props.type - 버튼의 타입
 * @param props.children - 버튼의 내용
 * @param props.isDisabled - 버튼의 비활성화 여부
 * @param props.className - 추가할 클래스 이름 (옵션)
 * @returns 
 */
function Button(props: ButtonProps & BaseProps) {
    return (
        <button
            className={props?.className}
            data-testid={props?.testId}
            type={props.type}
            disabled={props.isDisabled}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button;