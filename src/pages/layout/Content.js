import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

export default function Content({ contentComponent }) {
    const location = useLocation()
    const path = location.pathname;
    return (
        <div className="content-layout">
            {
                path.includes('/calendar') ?
                <div className="main-content rounded-2xl bg-[#3760CB]">
                    { contentComponent }
                </div>
                :
                path.includes('/date-guard') ?
                <div className="main-content rounded-2xl bg-[#100333]">
                    { contentComponent }
                </div>
                :
                path.includes('/godlen-rose-tokens') ? 
                <div className="main-content rounded-2xl bg-[#3760CB]">
                    { contentComponent }
                </div>
                :
                <div className="main-content rounded-2xl bg-[#D5D6E0]">
                    { contentComponent }
                </div>
            }
            <Footer />
        </div>
    )
}