import React, { useCallback, useState } from 'react'

/**
 * 값을 검증하는 커스텀 훅
 * @returns 
 */
function useValid<T>(props: {
    values: T;
    validator: any;
}) {
    const [values, setValues] = useState<T>(props.values);
    const [errors, setErros] = useState<{ [key in string]: string }>({});

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
        props.validator({
            name,
            value,
            setError: setErros,
        });
    }, [props, values]);

    return {
        values,
        errors,
        onChange
    }
}

export default useValid;