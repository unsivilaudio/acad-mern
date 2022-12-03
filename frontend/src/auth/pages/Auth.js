import { Helmet } from 'react-helmet-async';
import AuthForm from '../components/AuthForm';

export default function AuthPage({ authType, onLogin, user }) {
    const title = `Elysium | ${
        authType === 'login' ? 'Welcome back, please log in' : 'Sign up today'
    }`;

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta property='og:title' content={title} />
                <meta property='og:description' content='Authentication page' />
            </Helmet>
            <AuthForm type={authType} onLogin={onLogin} user={user} />
        </>
    );
}
