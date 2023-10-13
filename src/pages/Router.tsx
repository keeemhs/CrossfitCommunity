import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import HeroWODs from './HeroWODs';
import HeroWODsDetail from './HeroWODsDetail';
import PersonalWODs from './PersonalWODs';
import PersonalWODsDetail from './PersonalWODsDetail';

const Router: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/HeroWODs" element={<HeroWODs />} />
                    <Route path="/HeroWODs/:id" element={<HeroWODsDetail />} />
                    <Route path="/PersonalWODs" element={<PersonalWODs />} />
                    <Route path="/PersonalWODs/:id" element={<PersonalWODsDetail />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default Router;
