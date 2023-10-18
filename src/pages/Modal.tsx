import React from 'react';
import './css/Location.scss';

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
    addressInfo: {
        id: number;
        address: string;
        name: string;
        img: string;
    } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, addressInfo }) => {
    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>
                    &times;
                </span>
                {addressInfo && (
                    <>
                        <h2 style={{ color: '#ffffff' }}>{addressInfo.name}</h2>
                        <p>{addressInfo.address}</p>
                        <img src={addressInfo.img} alt="" />
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;
