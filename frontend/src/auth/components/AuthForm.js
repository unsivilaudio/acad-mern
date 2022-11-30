import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { validateEmail, validatePassword } from '../util/validation';
import { ReactComponent as LockIcon } from '../../assets/svg/iconmonstr-lock-22.svg';
import { ReactComponent as UserIcon } from '../../assets/svg/iconmonstr-user-circle-thin.svg';
import Button from '../../shared/components/UI/Button';
import Input from '../../shared/components/UI/Input';
import classes from './AuthForm.module.scss';

export default function AuthForm({ type = 'login', onLogin, user }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [authType, setAuthType] = useState(type);
    const [formState, setFormState] = useState({
        values: {
            email: '',
            password: '',
            passwordConfirm: '',
        },
        valid: false,
        errors: [],
    });
    const [showErrors, setShowErrors] = useState(false);

    useEffect(() => {
        // TOO MANY RE-RENDERS
        // navigate(`/auth/${authType}`, { replace: true });
        // HACK BELOW
        window.history.replaceState(null, null, `/auth/${authType}`);
    }, [authType]);

    useEffect(() => {
        const { email, password, passwordConfirm } = formState.values;
        let validationErrors = [];
        if (!email.trim().length || !password.trim().length) return;
        const emailErrors = validateEmail(email);
        const passwordErrors =
            authType === 'signup' ? validatePassword(password) : [];
        if (
            authType === 'signup' &&
            password.trim() !== passwordConfirm.trim()
        ) {
            validationErrors.push('Passwords do not match!');
        }

        validationErrors = [
            ...emailErrors,
            ...passwordErrors,
            ...validationErrors,
        ];

        if (!validationErrors.length) {
            setFormState(ps => ({ ...ps, valid: true, errors: [] }));
        } else {
            setFormState(ps => ({
                ...ps,
                valid: false,
                errors: validationErrors,
            }));
        }
        setShowErrors(false);
    }, [formState.values, authType]);

    useEffect(() => {
        if (location.state?.redirectOnAuth && user) {
            navigate(location.state.redirectOnAuth);
        }
    }, [user, location.state, navigate]);

    function toggleAuthType() {
        setAuthType(ps => (ps === 'login' ? 'signup' : 'login'));
    }

    function handleChangeInput(e) {
        setFormState(ps => ({
            ...ps,
            values: {
                ...ps.values,
                [e.target.name]: e.target.value,
            },
        }));
    }

    function handleSubmitAuth(e) {
        e.preventDefault();
        if (!formState.valid) {
            setShowErrors(true);
            return;
        }
        if (authType === 'login') {
            onLogin();
        }
    }

    return (
        <form className={classes.AuthForm} onSubmit={handleSubmitAuth}>
            {!!formState.errors.length && (
                <ul
                    className={[
                        classes.Errors,
                        showErrors ? classes.Show : '',
                    ].join(' ')}>
                    <h2>Error!</h2>
                    {formState.errors.map(err => (
                        <li key={err}>{err}</li>
                    ))}
                </ul>
            )}
            <div className={classes.FormHeader}>
                <p>{authType === 'login' ? 'Welcome Back' : 'Sign Up'}</p>
                <span>
                    {authType === 'login' ? <LockIcon /> : <UserIcon />}
                </span>
            </div>
            <div className={classes.FormControl}>
                <div className={classes.FormGroup}>
                    <Input
                        name='email'
                        label='Email'
                        type='email'
                        onChange={handleChangeInput}
                        placeholder='john.smith@youremail.com'
                        value={formState.values.email}
                        required
                    />
                </div>
                <div className={classes.FormGroup}>
                    <Input
                        name='password'
                        label='Password'
                        type='password'
                        onChange={handleChangeInput}
                        placeholder='password'
                        value={formState.values.password}
                        required
                    />
                </div>
                {authType === 'signup' && (
                    <div className={classes.FormGroup}>
                        <Input
                            name='passwordConfirm'
                            label='Confirm Password'
                            type='password'
                            onChange={handleChangeInput}
                            placeholder='confirm password'
                            value={formState.values.passwordConfirm}
                            required
                        />
                    </div>
                )}
            </div>
            <div className={classes.FormActions}>
                <Button type='submit'>
                    {authType === 'login' ? 'Login' : 'Sign Up'}
                </Button>
                <p className={classes.SwitchAuth} onClick={toggleAuthType}>
                    {authType === 'login'
                        ? 'No account? No Problem! Switch to sign up.'
                        : 'Already a member? Switch to login in.'}
                </p>
            </div>
        </form>
    );
}
