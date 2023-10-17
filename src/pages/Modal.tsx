import React from 'react';

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
    addressInfo: {
        id: number;
        address: string;
        name: string;
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
                        <h2>{addressInfo.name}</h2>
                        <p>{addressInfo.address}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;
