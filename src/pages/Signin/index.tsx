
import React from 'react'
import GreyBackgroundWrapper from '../../components/common/GreyBackgroundWrapper'
import SignWrapper from '../../components/common/SignWrapper'
import InputForm from './InputForm'

/**
 * /signin
 * 로그인 페이지 컴포넌트
 * @returns 
 */
function index() {
    return (
        <main>
            <GreyBackgroundWrapper
                className='wrapper-center'
            >
                <SignWrapper
                    type="로그인"
                >
                    <InputForm />
                </SignWrapper>
            </GreyBackgroundWrapper>
        </main>

    )
}

export default index