import React  from "react";
import SignupContextProps from '../types/SignupContextProps';

/**
 * 회원가입 ContextAPI 정의
 */
export const SignupContext = React.createContext<SignupContextProps>({
    values: {
        email: '',
        password: ''
    },
    errors: {
        email: '',
        password: ''
    },
    onChange: () => {},
    onSubmit: () => {}
});