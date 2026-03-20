import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/homes/Home';
import BeTheoryHub from '@/pages/BeTheoryHub';
import NotFound from '@/components/demo/NotFound';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* dev understanding be */}
            <Route path="/" element={<Home />} />
            <Route path="/theory" element={<BeTheoryHub />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
