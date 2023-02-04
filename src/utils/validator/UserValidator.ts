function UserValidator({
    name,
    value,
    errors,
    setError,
}: {
    errors: { [key in string]: string};
    name: string;
    value: string;
    setError: React.Dispatch<React.SetStateAction<{
        [x: string]: string;
    }>>
}) {
    if(name === "email") {
        if(value === "") {
            setError({
                ...errors,
                email: "이메일을 입력해주세요.",
            })
            return;
        } else if(!value.includes("@")) {
            setError({
                ...errors,
                email: "이메일 형식이 올바르지않습니다 반드시 @ 포함해주세요.",
            })
            return;
        } else {
            setError({
                ...errors,
                email: ""
            })
            return;
        }
    }
    if(name === "password") {
        if(value === "") {
            setError({
                ...errors,
                password: "비밀번호를 입력해주세요.",
            })
            return;
        } else if(value.length < 8) {
            setError({
                ...errors,
                password: "비밀번호는 8자 이상이어야 합니다.",
            })
            return;
        } else {
            setError({
                ...errors,
                password: "",
            })
            return;
        }
    }
}

export default UserValidator;