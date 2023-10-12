import React from 'react';
import { equipments } from './data/EquipmentData';
import Oround from './img/Oround.png';
import './css/Home.css';

interface EquipmentProps {
    id: number;
    title: string;
    img: string;
    hyperlink: string;
}

const Home: React.FC = () => {
    return (
        <>
            {/* Banner Section */}
            <section className="sec_1">
                <img src={Oround} className="banner" alt="logo" />
            </section>

            {/* Equipment Section */}
            <section className="sec_2">
                <div className="sec_2_title">
                    <span>인기제품</span>
                </div>
                <div className="sec_2_body">
                    {equipments.map((equipment: EquipmentProps) => (
                        <div className="sec_2_body_specific" key={equipment.id}>
                            <a href={equipment.hyperlink}>
                                <img src={equipment.img} className="equipment" alt={equipment.title} />
                                <div>{equipment.title}</div>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
