import React, { useState } from 'react';
import axios from 'axios';
import { PersonalWodsList, PersonalWOD } from './data/PersonalWODsData';
import './css/PersonalWODsAdd.scss';

const PersonalWODsAdd: React.FC = () => {
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        round: '',
        timeCap: '',
        activity: '',
        weight: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/personalWODs', formData);
            console.log('등록 성공:', response.data);

            // 데이터를 PersonalWodsList에 추가
            const newPersonalWOD: PersonalWOD = {
                id: PersonalWodsList.length + 1, // 새로운 아이디 생성
                ...formData,
                createdOn: new Date().toISOString(), // 현재 날짜와 시간으로 설정
            };
            PersonalWodsList.push(newPersonalWOD);

            // 등록 성공 시 필요한 작업을 수행하세요.
        } catch (error) {
            console.error('에러 발생:', error);
        }
    };

    return (
        <>
            <form className="form-container" onSubmit={handleSubmit}>
                <h2>PersonalWODs ADD</h2>
                <div className="form-group">
                    <label>
                        <input type="checkbox" name="type" value="AMRAP" checked={formData.type.includes('AMRAP')} onChange={handleChange} />
                        AMRAP
                    </label>
                    <label>
                        <input type="checkbox" name="type" value="EMOM" checked={formData.type.includes('EMOM')} onChange={handleChange} />
                        EMOM
                    </label>
                    <label>
                        <input type="checkbox" name="type" value="FORTIME" checked={formData.type.includes('FORTIME')} onChange={handleChange} />
                        FOR TIME
                    </label>
                    <label>
                        <input type="checkbox" name="type" value="TABATA" checked={formData.type.includes('TABATA')} onChange={handleChange} />
                        TABATA
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        제목:
                        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        라운드:
                        <input type="text" name="round" value={formData.round} onChange={handleChange} required />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        시간 제한:
                        <input type="text" name="timeCap" value={formData.timeCap} onChange={handleChange} required />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        활동:
                        <input type="text" name="activity" value={formData.activity} onChange={handleChange} required />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        무게:
                        <input type="text" name="weight" value={formData.weight} onChange={handleChange} required />
                    </label>
                </div>
                <br />
                <div className="button-container">
                    <button type="submit">등록</button>
                </div>
            </form>
        </>
    );
};

export default PersonalWODsAdd;
