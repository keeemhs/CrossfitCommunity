import React from 'react';
import './css/MyPage.scss';

const MyPage: React.FC = () => {
    return (
        <div className="wrap">
            <div className="login">
                <h2>Log-in</h2>
                <div className="login_id">
                    <h4>E-mail</h4>
                    <input type="email" name="" id="" placeholder="Email" />
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
                    <button type="submit" value="로그인">
                        로그인
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyPage;
