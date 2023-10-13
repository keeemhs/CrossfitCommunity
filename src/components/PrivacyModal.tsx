import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

type PropsType = {
    click?: boolean;
};

const PrivacyModal: React.FC<PropsType> = (props: PropsType) => {
    const [open, setOpen] = React.useState(false);
    const policyText = <p>Privacy PolicyPrivacy PolicyPrivacy PolicyPrivacy PolicyPrivacy PolicyPrivacy PolicyPrivacy Policy</p>;
    return (
        <>
            <button className="item1" onClick={() => setOpen(true)}>
                Privacy Policy
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>Privacy Policy</h2>
                {policyText}
            </Modal>
        </>
    );
};

export default PrivacyModal;
