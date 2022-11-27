import AuthForm from '../components/AuthForm';

export default function AuthPage({ authType, onLogin, user }) {
    return <AuthForm type={authType} onLogin={onLogin} user={user} />;
}
