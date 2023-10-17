import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HeroWODsList } from './data/HeroWODsData';
import dayjs from 'dayjs';
import './css/HeroWODsDetail.scss';
import { UserRankList } from './data/HeroWODsRecord';

// UserRank 인터페이스 수정
export interface UserRank {
    id: number;
    activityid: number;
    name: string;
    minute?: number;
    second?: number;
}

const HeroWODDetail = () => {
    const { id } = useParams<{ id: string }>(); // id 파라미터를 문자열로 타입 지정
    const heroWod = HeroWODsList.find((board) => board.id === Number(id));
    const [name, setName] = useState<string>(''); // 사용자 이름
    const [minute, setMinute] = useState<string>(''); // 사용자 기록 시간 (분)
    const [second, setSecond] = useState<string>(''); // 사용자 기록 시간 (초)
    const [userRankList, setUserRankList] = useState<UserRank[]>(UserRankList);

    // 쿠키에서 username 가져오기
    useEffect(() => {
        const username = getCookie('username');
        if (username) {
            setName(username);
        }
    }, []);

    const getCookie = (name: string): string | undefined => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
        return undefined; // 명시적으로 반환 타입을 지정
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!getCookie('username')) {
            alert('로그인 후 이용해주세요.');
            return;
        }

        const newUserRank: UserRank = {
            id: userRankList.length + 1,
            activityid: heroWod?.id || 0,
            name: name,
            minute: parseInt(minute),
            second: parseInt(second),
        };

        setUserRankList([...userRankList, newUserRank]);

        setName('');
        setMinute('');
        setSecond('');
    };

    if (!heroWod) {
        return <div>해당 HeroWOD를 찾을 수 없습니다.</div>;
    }

    const userRanks = userRankList.filter((rank) => rank.activityid === heroWod.id);
    userRanks.sort((a, b) => {
        const timeA = (a.minute || 0) * 60 + (a.second || 0);
        const timeB = (b.minute || 0) * 60 + (b.second || 0);
        return timeA - timeB;
    });

    return (
        <section className="detail">
            <div className="hero-wod-detail">
                <h2>{heroWod.title}</h2>
                {heroWod.round && (
                    <p className="hero-wod-info">
                        {heroWod.round} Rounds {heroWod.type}
                    </p>
                )}
                {!heroWod.round && heroWod.type && <p className="hero-wod-info">{heroWod.type}</p>}

                <p
                    className="hero-wod-info"
                    dangerouslySetInnerHTML={{
                        __html: heroWod.activity.replace(/(\d+)/g, (match, p1, offset, string) => {
                            return offset === 0 ? match : '<br/>' + match;
                        }),
                    }}
                />
                {heroWod.weight && <p className="hero-wod-info">Weight : {heroWod.weight}</p>}
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
                            Rank{index + 1}. {userRank.name}'s record: {userRank.minute}'{userRank.second}"
                        </p>
                    </div>
                ))}

                <form className="record-add" onSubmit={handleSubmit}>
                    <input className="record-add-input-name" type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} readOnly />
                    <input className="record-add-input-number" type="number" placeholder="기록(분)" value={minute} onChange={(e) => setMinute(e.target.value)} />
                    <input
                        className="record-add-input-number"
                        type="number"
                        placeholder="기록(초)"
                        value={second}
                        onChange={(e) => {
                            const value = parseInt(e.target.value, 10); // 입력값을 숫자로 변환
                            if (!isNaN(value) && value >= 0 && value < 60) {
                                setSecond(value.toString()); // 숫자로 변환된 값을 문자열로 다시 설정
                            } else {
                                setSecond(''); // 유효하지 않은 값이면 빈 문자열로 설정
                            }
                        }}
                    />
                    <button type="submit">기록</button>
                </form>
            </div>
        </section>
    );
};

export default HeroWODDetail;
