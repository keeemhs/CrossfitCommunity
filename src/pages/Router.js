import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import HeroWODs from './HeroWODs';
import HeroWODsDetail from './HeroWODsDetail';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/HeroWODs" element={<HeroWODs />} />
                    <Route path="/HeroWODs/:id" element={<HeroWODsDetail />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
