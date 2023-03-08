import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/index';

const AppRouter = (props) => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route index element={<Dashboard />} />
                    <Route path="*" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
