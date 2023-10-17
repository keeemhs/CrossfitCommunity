import React, { useState } from 'react';
import './css/MyPage.scss';
import { UserData } from './data/User'; // User.tsx 파일에서 데이터 가져오기

const MyPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(inputEmail);

        setIsValidEmail(isValid);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputPassword = e.target.value;
        setPassword(inputPassword);
    };

    const handleLoginClick = () => {
        if (isValidEmail) {
            const user = UserData.find((u) => u.userid === email && u.password === password);

            if (user) {
                alert('로그인되었습니다.');

                // 현재 시간에서 5분 뒤의 시간을 계산합니다.
                const expires = new Date(Date.now() + 5 * 60 * 1000); // 5분 = 5 * 60 * 1000 밀리초

                // 쿠키 생성
                document.cookie = `userid=${user.userid}; expires=${expires.toUTCString()}; path=/`;
                document.cookie = `username=${user.name}; expires=${expires.toUTCString()}; path=/`;

                window.location.href = '/';
            } else {
                alert('이메일 혹은 비밀번호가 올바르지 않습니다.');
            }
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
                    <input type="password" name="" id="" placeholder="Password" value={password} onChange={handlePasswordChange} />
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
