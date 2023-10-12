import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeroWODsList } from './data/HeroWODsData';
import axios from 'axios';
import dayjs from 'dayjs';
import './css/HeroWODs.scss';

const HeroWODs = () => {
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
            .get('/HeroWODs')
            .then((res) => setBoardList(res.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <section className="board">
            <div className="board-list">
                <h2>HeroWODs</h2>

                <h4>Total post: {HeroWODsList.length}개</h4>

                <table>
                    <colgroup>
                        <col width="15%" />
                        <col width="65%" />
                        <col width="20%" />
                    </colgroup>

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {HeroWODsList.map((board, index) => {
                            return (
                                <tr key={board.id}>
                                    <td>{board.id}</td>
                                    <td className="title">
                                        <Link to={`/HeroWODs/${board.id}`}>{board.title}</Link>
                                    </td>
                                    <td>{dayjs(board.createdOn).format('YYYY.MM.DD')}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default HeroWODs;
