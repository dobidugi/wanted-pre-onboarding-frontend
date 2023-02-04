
function UserValidator({
    name,
    value,
    setError,
}: {
    name: string;
    value: string;
    setError: (error: string) => void;
}) {
    if(name === "email") {
        if(value === "") {
            setError("이메일을 입력해주세요.");
        } else if(!value.includes("@")) {
            setError("이메일 형식이 올바르지 않습니다.");
        } else {
            setError("");
        }
    }
    if(name === "password") {
        if(value === "") {
            setError("비밀번호를 입력해주세요.");
        } else if(value.length < 8) {
            setError("비밀번호는 8자 이상이어야 합니다.");
        } else {
            setError("");
        }
    }
}

export default UserValidator;