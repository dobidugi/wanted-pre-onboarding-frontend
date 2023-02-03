import React from "react";
import Input from "./Input";
import InputProps from '../../types/InputProps';
import BaseProps from '../../types/BaseProps';
import { css } from "@emotion/react";

interface LabelInputProps {
    label: string;
    input: InputProps & BaseProps;
}

/**
 * input 태그를 감싸는 label 태그 컴포넌트
 * @param props.label - label 태그의 텍스트
 * @param props.input - input 태그의 속성들
 */
function LabelInput(props: LabelInputProps) {
    return (
        <label
            css={style}
        >
            <span>{props.label}</span>
            <Input
                {...props.input}
            />
        </label>
    )
}

const style = css`
    span {
        font-weight: 500;
        color: var(--grey-400);
    }
    input {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`

export default LabelInput;