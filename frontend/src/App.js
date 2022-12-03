import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import AuthPage from './auth/pages/Auth';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import Layout from './shared/components/Layout';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import NotFoundPage from './shared/layouts/NotFound';
import Protected from './shared/layouts/Protected';
import Users from './user/pages/Users';

function App() {
    const [user, setUser] = useState(null);

    function login() {
        setUser({ email: 'test@test.com ' });
    }

    function logout() {
        setUser(null);
    }

    return (
        <BrowserRouter>
            <HelmetProvider>
                <MainNavigation onLogout={logout} />
                <Layout>
                    <Routes>
                        <Route path='/' element={<Users />} />
                        <Route path='/auth'>
                            <Route
                                path='login'
                                element={
                                    <AuthPage
                                        authType='login'
                                        onLogin={login}
                                        user={user}
                                    />
                                }
                            />
                            <Route
                                path='signup'
                                element={
                                    <AuthPage
                                        authType='signup'
                                        onLogin={login}
                                        user={user}
                                    />
                                }
                            />
                        </Route>
                        <Route element={<Protected user={user} />}>
                            <Route
                                path='/:userId/places'
                                element={<UserPlaces />}
                            />
                            <Route path='/places/new' element={<NewPlace />} />
                        </Route>
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </Layout>
            </HelmetProvider>
        </BrowserRouter>
    );
}

export default App;
