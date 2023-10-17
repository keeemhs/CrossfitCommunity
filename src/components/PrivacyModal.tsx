import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

type PropsType = {
    click?: boolean;
};

const PrivacyModal: React.FC<PropsType> = (props: PropsType) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <p>
            <p>당사가 사용자에게 웹사이트의 특정 영역에 접근할 수 있는 비밀번호를 제공하는 경우(또는 사용자가 비밀번호를 선택한 경우), 사용자는 해당 비밀번호를 비밀로 유지하는 책임을 집니다. 당사는 그 누구와도 비밀번호를 공유하지 말 것을 요청합니다.</p>
            <p>
                당사는 당사의 웹사이트에 제공된 개인정보의 안전과 완전성을 보호하기 위해 합리적인 기술 및 조직적 예방조치를 취하고 있지만, 개방된 글로벌 커뮤니케이션 수단이라는 인터넷이 갖는 고유의 특성으로 인하여 이러한 정보가 인터넷을 통해 전송되거나 당사의 시스템에 저장되거나 어떠한 방식으로
                당사가 관리하는 과정에서 해커를 비롯한 다른 사람들의 침입으로부터 완벽하게 보호된다고 보장할 수는 없습니다.{' '}
            </p>
            <p>당사는 물리적, 전자적, 절차적 보호장치를 갖추어 사용자의 개인정보를 보호하고 있습니다.</p>
        </p>
    );
    return (
        <>
            <button className="item1" onClick={() => setOpen(true)}>
                Privacy Policy
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2 style={{ color: 'black' }}>Privacy Policy</h2>
                {policyText}
            </Modal>
        </>
    );
};

export default PrivacyModal;
