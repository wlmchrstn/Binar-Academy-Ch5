import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from '../pages/homepage/homepage';
import Custom404 from '../pages/custom404/custom404';

const Router = () => {
    return (
        <Routes>
            <Route path="*" element={<Custom404 />} />
            <Route path="/" element={<Homepage />} />
        </Routes>
    );
};

export default Router;
