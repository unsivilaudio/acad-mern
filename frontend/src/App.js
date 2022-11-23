import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import Layout from './shared/components/Layout';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';

function App() {
    return (
        <BrowserRouter>
            <MainNavigation />
            <Layout>
                <Routes>
                    <Route path='/' element={<Users />} />
                    <Route path='/places/new' element={<NewPlace />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
