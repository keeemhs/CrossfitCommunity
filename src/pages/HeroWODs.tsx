import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HeroWODsList } from './data/HeroWODsData';
import { UserRankList } from './data/HeroWODsRecord';
import axios from 'axios';
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

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    useEffect(() => {
        axios
            .get('/HeroWODs')
            .then((res) => setBoardList(res.data))
            .catch((error) => console.log(error));
    }, []);

    const getMatchingUserRanksCount = (activityId: Number) => {
        return UserRankList.filter((item) => item.activityid === activityId).length;
    };

    // 현재 페이지에 해당하는 게시글 목록
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = HeroWODsList.slice(indexOfFirstPost, indexOfLastPost);

    // 페이지 변경 시 호출되는 함수
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <section className="board">
            <div className="board-list">
                <h2>HeroWODs</h2>

                <h4>Total post: {HeroWODsList.length}개</h4>

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
                        {currentPosts.map((board, index) => {
                            const matchingUserRanksCount = getMatchingUserRanksCount(board.id);
                            return (
                                <tr key={board.id}>
                                    <td>{board.id}</td>
                                    <td className="title">
                                        <Link to={`/HeroWODs/${board.id}`}>{board.title}</Link>
                                    </td>
                                    <td>{matchingUserRanksCount}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="paginations center">
                    {Array.from({ length: Math.ceil(HeroWODsList.length / postsPerPage) }).map((_, index) => (
                        <button key={index} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroWODs;
