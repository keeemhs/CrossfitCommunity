import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, Link as LinkType } from './NavbarData'; // 이름이 겹치므로 별칭을 사용합니다.
import logo from './img/CrossFitLogo.svg';

const Header: React.FC = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLUListElement>(null);
    const navigate = useNavigate();

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    const handleLinkClick = () => {
        setShowLinks(false); // 링크 클릭 시 메뉴를 닫습니다.
    };

    useEffect(() => {
        const linksHeight = linksRef.current?.getBoundingClientRect().height || 0;
        if (showLinks) {
            linksContainerRef.current!.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current!.style.height = '0px';
        }
    }, [showLinks]);

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
                        {' '}
                        {/* a 태그의 기본 동작을 막고 react-router-dom을 사용하여 이동합니다. */}
                        <img src={logo} className="logo" alt="logo" />
                    </a>
                    <button className="nav-toggle" onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                <div className="links-container" ref={linksContainerRef}>
                    <ul className="links" ref={linksRef}>
                        {links.map((link: LinkType) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <Link to={url} onClick={handleLinkClick}>
                                        {text}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
