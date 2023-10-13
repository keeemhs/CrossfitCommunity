import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PersonalWodsList } from './data/PersonalWODsData';
import { PersonalWODsRecordList } from './data/PersonalWODsRecord';
import axios from 'axios';
import './css/PersonalWODs.scss';

const PersonalWODs = () => {
    const [boardList, setBoardList] = useState([
        {
            id: '',
            title: '',
            content: '',
            createdOn: '',
        },
    ]);

    useEffect(() => {
        axios
            .get('/PersonalWODs')
            .then((res) => setBoardList(res.data))
            .catch((error) => console.log(error));
    }, []);

    // UserRankList에서 acrivityid와 일치하는 항목의 개수를 세는 함수
    const getMatchingUserRanksCount = (activityId: Number) => {
        return PersonalWODsRecordList.filter((item) => item.activityid === activityId).length;
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
            </div>
        </section>
    );
};

export default PersonalWODs;
