import React, { useState } from 'react';
import './css/MyPage.scss';

const MyPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);

        // 정규 표현식을 사용하여 이메일 형식을 확인합니다.
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(inputEmail);

        setIsValidEmail(isValid);
    };

    const handleLoginClick = () => {
        if (isValidEmail) {
            console.log('로그인 버튼이 클릭되었습니다.');
        } else {
            alert('올바른 이메일 형식이 아닙니다.');
        }
    };

    return (
        <div className="wrap">
            <div className="login">
                <h2>Log-in</h2>
                <div className="login_id">
                    <h4>E-mail</h4>
                    <input type="email" name="" id="" placeholder="Email" value={email} onChange={handleEmailChange} />
                    {!isValidEmail && (
                        <p className="error-message" style={{ color: 'red' }}>
                            올바른 이메일 형식이 아닙니다.
                        </p>
                    )}
                </div>
                <div className="login_pw">
                    <h4>Password</h4>
                    <input type="password" name="" id="" placeholder="Password" />
                </div>
                <div className="login_etc">
                    <div className="checkbox">
                        <input type="checkbox" name="" id="" /> Remember Me?
                    </div>
                    <div className="forgot_pw">
                        <a href="">Forgot Password?</a>
                    </div>
                </div>
                <div className="submit">
                    <button type="button" onClick={handleLoginClick}>
                        로그인
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyPage;
