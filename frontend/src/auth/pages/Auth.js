import AuthForm from '../components/AuthForm';

export default function AuthPage({ authType }) {
    return <AuthForm type={authType} />;
}
