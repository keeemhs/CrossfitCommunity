import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PersonalWodsList } from './data/PersonalWODsData';
import { PersonalWODsRecordList } from './data/PersonalWODsRecord';
import axios from 'axios';
import './css/PersonalWODs.scss';

const PersonalWODs = () => {
    const [boardList, setBoardList] = useState([]);

    useEffect(() => {
        axios
            .get('/PersonalWODs')
            .then((res) => setBoardList(res.data))
            .catch((error) => console.log(error));
    }, []);

    const getMatchingUserRanksCount = (activityId: number) => {
        return PersonalWODsRecordList.filter((item) => item.activityid === activityId).length;
    };

    const getCookie = (name: string): string | undefined => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
        return undefined;
    };

    const handleRegisterClick = () => {
        const username = getCookie('username');

        if (!username) {
            alert('로그인 후 사용해주세요.');
            return;
        }

        window.location.href = '/PersonalWODs/PersonalWODsAdd';
    };

    return (
        <section className="board">
            <div className="board-list">
                <h2>PersonalWODs</h2>
                <h4>Total post: {PersonalWodsList.length}개</h4>
                <table>
                    <colgroup>
                        <col width="10%" />
                        <col width="70%" />
                        <col width="20%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Participants</th>
                        </tr>
                    </thead>
                    <tbody>
                        {PersonalWodsList.map((board, index) => {
                            const matchingUserRanksCount = getMatchingUserRanksCount(board.id);
                            return (
                                <tr key={board.id}>
                                    <td>{board.id}</td>
                                    <td className="title">
                                        <Link to={`/PersonalWODs/${board.id}`}>{board.title}</Link>
                                    </td>
                                    <td>{matchingUserRanksCount}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="pagination">
                    <button onClick={handleRegisterClick}>등록하기</button>
                </div>
            </div>
        </section>
    );
};

export default PersonalWODs;
