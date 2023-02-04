import { createContext } from "react";
import SigninContextProps from "../types/SigninContextProps";

const SigninContext = createContext<SigninContextProps>({
    values: {
        email: "",
        password: "",
    },
    errors: {
        email: "",
        password: "",
    },
    onChange: () => {},
    onSubmit: () => {},
});

export default SigninContext;