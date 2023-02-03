import React from 'react'
import GreyBackgroundWrapper from '../../components/common/GreyBackgroundWrapper'
import SignWrapper from '../../components/common/SignWrapper'
import InputForm from './InputForm'

/**
 * /signup
 * 회원가입 페이지 컴포넌트
 * @returns 
 */
function index() {
    return (
        <main>
            <GreyBackgroundWrapper
                className='wrapper-center'
            >
                <SignWrapper
                    type="회원가입"
                >
                    <InputForm />
                </SignWrapper>
            </GreyBackgroundWrapper>
        </main>
    )
}

export default index