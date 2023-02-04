
interface SigninContextProps {
    values: {
        email: string;
        password: string;
    },
    errors: {
        [key in string]: string;
    },
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default SigninContextProps;