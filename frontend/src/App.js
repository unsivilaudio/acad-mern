import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './auth/pages/Auth';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
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
                    <Route path='/auth'>
                        <Route
                            path='login'
                            element={<AuthPage authType='login' />}
                        />
                        <Route
                            path='signup'
                            element={<AuthPage authType='signup' />}
                        />
                    </Route>
                    <Route path='/:userId/places' element={<UserPlaces />} />
                    <Route path='/places/new' element={<NewPlace />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
