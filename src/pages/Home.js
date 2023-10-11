import React, { useState, useRef, useEffect } from 'react';
import { equipments } from './data/EquipmentData';
import Oround from './img/Oround.png';
import { Style } from './css/Home.css';

export default function Home() {
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
                    {equipments.map((link) => {
                        const { id, title, img, hyperlink } = link;
                        return (
                            <div className="sec_2_body_specific">
                                <a href={hyperlink}>
                                    <img src={img} className="equipment" alt="{title}" />
                                    <div>{title}</div>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
