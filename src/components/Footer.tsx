import React from 'react';
import './css/Footer.scss';
import PrivacyModal from './PrivacyModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMegaport, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    <PrivacyModal />
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} /> <span style={{ paddingLeft: 5 }}>{new Date().getFullYear()} keeemhs. All Rights Reserved.</span>
                </div>
                <a href="https://github.com/keeemhs" target="_blank" className="item3">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://cafe.naver.com/aroundundangori" target="_blank" className="item4">
                    <FontAwesomeIcon icon={faMegaport} />
                </a>

                {false && <PrivacyModal click={true} />}
            </div>
        </footer>
    );
};

export default Footer;
