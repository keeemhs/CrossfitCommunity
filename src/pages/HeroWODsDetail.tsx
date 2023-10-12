// HeroWODDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { HeroWODsList } from './data/HeroWODsData';
import dayjs from 'dayjs';
import './css/HeroWODsDetail.scss'; // 추가

const HeroWODDetail = () => {
    const { id } = useParams();

    const heroWod = HeroWODsList.find((board) => board.id === Number(id));

    if (!heroWod) {
        return <div>해당 HeroWOD를 찾을 수 없습니다.</div>;
    }

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
            </div>
        </section>
    );
};

export default HeroWODDetail;
