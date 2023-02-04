import User from './User';

/**
 * 회원가입 ContextAPI Props
 * @interface SignupContextProps
 * @property {User} values - 회원가입 폼 값
 * @property {Function} onChange - 회원가입 폼 값 변경 이벤트
 * @property {Function} onSubmit - 회원가입 폼 제출 이벤트
 */
interface SignupContextProps {
    values: User;
    errors: { [key in string]: string}
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default SignupContextProps;