import React from 'react';
import { useParams } from 'react-router-dom';
import { PersonalWodsList } from './data/PersonalWODsData';
import dayjs from 'dayjs';
import './css/HeroWODsDetail.scss';
import { PersonalWODsRecordList } from './data/PersonalWODsRecord';

const PersonalWODsDetail = () => {
    const { id } = useParams();
    const personalWOD = PersonalWodsList.find((board) => board.id === Number(id));

    if (!personalWOD) {
        return <div>해당 HeroWOD를 찾을 수 없습니다.</div>;
    }

    const userRanks = PersonalWODsRecordList.filter((rank) => rank.activityid === personalWOD.id);
    userRanks.sort((a, b) => a.timecap - b.timecap); // 오름차순 정렬

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
                {userRanks.map((userRank, index) => (
                    <div key={userRank.id} className="user-rank">
                        <p>
                            {index + 1}등. {userRank.name} 님의 소요시간: {userRank.timecap}분
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PersonalWODsDetail;
