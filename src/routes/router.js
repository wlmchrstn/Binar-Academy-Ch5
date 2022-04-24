import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home/home';
import SearchPage from '../pages/search/search';
import DetailPage from '../pages/detail/detail';
import Custom404 from '../pages/custom404/custom404';

const Router = () => {
    return (
        <Routes>
            <Route path="*" element={<Custom404 />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/search/:id" element={<DetailPage />} />
        </Routes>
    );
};

export default Router;
