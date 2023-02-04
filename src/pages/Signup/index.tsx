import React, { useCallback, useState } from "react";
import GreyBackgroundWrapper from "../../components/common/GreyBackgroundWrapper";
import SignWrapper from "../../components/common/SignWrapper";
import InputForm from "./InputForm";
import SignupValues from "../../types/SignupValues";
import { SignupContext } from "../../store/SignupContext";

/**
 * /signup
 * 회원가입 페이지 컴포넌트
 * @returns 
 */
function Index() {
    const [values, setValues] = useState<SignupValues>({
        email: '',
        password: '',
    });

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }, [values]);

    const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }, []);

    return (
        <main>
            <SignupContext.Provider value={{ values, onChange, onSubmit }}>
                <GreyBackgroundWrapper
                    className='wrapper-center'
                >
                    <SignWrapper
                        type="회원가입"
                    >
                        <InputForm />
                    </SignWrapper>
                </GreyBackgroundWrapper>
            </SignupContext.Provider>
        </main>
    );
}

export default Index;