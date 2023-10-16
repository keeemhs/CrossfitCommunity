import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PersonalWodsList } from './data/PersonalWODsData';
import dayjs from 'dayjs';
import './css/HeroWODsDetail.scss';
import { PersonalWODsRecordList } from './data/PersonalWODsRecord';

const PersonalWODsDetail = () => {
    const { id } = useParams();
    const personalWOD = PersonalWodsList.find((board) => board.id === Number(id));
    const [name, setName] = useState(''); // 사용자 이름
    const [time, setTime] = useState('');
    const [userRanks, setUserRanks] = useState(PersonalWODsRecordList.filter((rank) => rank.activityid === personalWOD?.id));

    if (!personalWOD) {
        return <div>해당 HeroWOD를 찾을 수 없습니다.</div>;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !time) {
            alert('이름과 기록시간을 입력하세요.');
            return;
        }

        // 사용자 기록 추가 로직을 여기에 작성
        const newUserRank = {
            id: userRanks.length + 1,
            activityid: personalWOD.id,
            name: name,
            timecap: parseInt(time),
        };

        setUserRanks([...userRanks, newUserRank]); // 함수형 업데이트 사용

        setName('');
        setTime('');
    };
    const sortedUserRanks = [...userRanks].sort((a, b) => a.timecap - b.timecap);

    return (
        <section className="detail">
            <div className="hero-wod-detail">
                <h2>{personalWOD.title}</h2>
                <p className="hero-wod-info">
                    {personalWOD.round} Rounds {personalWOD.type}
                </p>
                <p
                    className="hero-wod-info"
                    dangerouslySetInnerHTML={{
                        __html: personalWOD.activity.replace(/(\d+)/g, (match, p1, offset, string) => {
                            return offset === 0 ? match : '<br/>' + match;
                        }),
                    }}
                />
                <p className="hero-wod-info">Time Cap : {personalWOD.timeCap}mins</p>
                <p className="hero-wod-date">Date: {dayjs(personalWOD.createdOn).format('YYYY.MM.DD')}</p>
                <button className="go-back-button" onClick={() => window.history.back()}>
                    뒤로 가기
                </button>
            </div>

            <div className="user-ranks">
                <h3>User Record</h3>
                {sortedUserRanks.map((userRank, index) => (
                    <div key={userRank.id} className="user-rank">
                        <p>
                            {index + 1}등. {userRank.name} 님의 소요시간: {userRank.timecap}분
                        </p>
                    </div>
                ))}

                <form className="record-add" onSubmit={handleSubmit}>
                    <input className="record-add-input-name" type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
                    <input className="record-add-input-number" type="number" placeholder="기록 시간(분)" value={time} onChange={(e) => setTime(e.target.value)} />
                    <button type="submit">기록</button>
                </form>
            </div>
        </section>
    );
};

export default PersonalWODsDetail;
