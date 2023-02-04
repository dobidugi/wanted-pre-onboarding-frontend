import BaseProps from "./BaseProps";
import InputProps from "./InputProps";

/**
 * 입력 아이템 타입
 * @interface InputType
 * @property {string} label - 라벨
 * @property {InputProps & BaseProps} input - 입력 아이템
 * @property {string} error - 에러 메시지
 */
interface InputType {
    label: string;
    input: InputProps & BaseProps
    error: string;
}

export default InputType;