import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { HeroWODsList } from './data/HeroWODsData';
import dayjs from 'dayjs';
import './css/HeroWODsDetail.scss';
import { UserRankList } from './data/HeroWODsRecord';

const HeroWODDetail = () => {
    const { id } = useParams();
    const heroWod = HeroWODsList.find((board) => board.id === Number(id));
    const [name, setName] = useState(''); // 사용자 이름
    const [time, setTime] = useState(''); // 사용자 기록 시간
    const [userRankList, setUserRankList] = useState(UserRankList);

    if (!heroWod) {
        return <div>해당 HeroWOD를 찾을 수 없습니다.</div>;
    }

    const userRanks = userRankList.filter((rank) => rank.activityid === heroWod.id);
    userRanks.sort((a, b) => a.timecap - b.timecap); // 오름차순 정렬

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !time) {
            alert('이름과 기록시간을 입력하세요.');
            return;
        }

        const newUserRank = {
            id: userRankList.length + 1,
            activityid: heroWod.id,
            name: name,
            timecap: parseInt(time),
        };

        setUserRankList([...userRankList, newUserRank]);

        setName('');
        setTime('');
    };

    return (
        <section className="detail">
            <div className="hero-wod-detail">
                <h2>{heroWod.title}</h2>
                <p className="hero-wod-info">
                    {heroWod.round} Rounds {heroWod.type}
                </p>
                <p
                    className="hero-wod-info"
                    dangerouslySetInnerHTML={{
                        __html: heroWod.activity.replace(/(\d+)/g, (match, p1, offset, string) => {
                            return offset === 0 ? match : '<br/>' + match;
                        }),
                    }}
                />
                <p className="hero-wod-info">Time Cap : {heroWod.timeCap}mins</p>
                <p className="hero-wod-date">Date: {dayjs(heroWod.createdOn).format('YYYY.MM.DD')}</p>
                <button className="go-back-button" onClick={() => window.history.back()}>
                    뒤로 가기
                </button>
            </div>

            <div className="user-ranks">
                <h3>User Record</h3>
                {userRanks.map((userRank, index) => (
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

export default HeroWODDetail;
