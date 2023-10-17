import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { links, Link as LinkType } from './NavbarData';
import logo from './img/CrossFitLogo.svg';

export interface Link {
    id: number;
    url: string;
    text: string;
    isLoginLogout?: boolean;
}

const Header: React.FC = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLUListElement>(null);
    const navigate = useNavigate();

    const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
    };

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    const handleLinkClick = () => {
        setShowLinks(false);
    };

    useEffect(() => {
        const linksHeight = linksRef.current?.getBoundingClientRect().height || 0;
        if (showLinks) {
            linksContainerRef.current!.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current!.style.height = '0px';
        }
    }, [showLinks]);

    const username = getCookie('username');

    const handleLogoutClick = () => {
        // 쿠키 삭제
        document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = 'userid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        navigate('/'); // 로그아웃 후 홈페이지로 이동
    };

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <a
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate('/');
                        }}
                    >
                        <img src={logo} className="logo" alt="logo" />
                    </a>
                    <button className="nav-toggle" onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                <div className="links-container" ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
                        {links.map((link: LinkType) => {
                            const { id, url, text, isLoginLogout } = link;
                            if (isLoginLogout) {
                                if (username) {
                                    return (
                                        <li key={id}>
                                            <span onClick={handleLogoutClick}>Logout</span>
                                        </li>
                                    );
                                }
                            } else {
                                return (
                                    <li key={id}>
                                        <Link to={url} onClick={handleLinkClick}>
                                            {text}
                                        </Link>
                                    </li>
                                );
                            }
                        })}
                        {username && (
                            <li>
                                <span>, {username}</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
