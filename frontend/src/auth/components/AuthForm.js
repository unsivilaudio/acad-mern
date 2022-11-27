import { useEffect, useState } from 'react';

import { ReactComponent as LockIcon } from '../../assets/svg/iconmonstr-lock-22.svg';
import { ReactComponent as UserIcon } from '../../assets/svg/iconmonstr-user-circle-thin.svg';
import Button from '../../shared/components/UI/Button';
import Input from '../../shared/components/UI/Input';
import classes from './AuthForm.module.scss';

export default function AuthForm({ type = 'login' }) {
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

    useEffect(() => {
        // TOO MANY RE-RENDERS
        // navigate(`/auth/${authType}`, { replace: true });
        // HACK BELOW
        window.history.replaceState(null, null, `/auth/${authType}`);
    }, [authType]);

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
    }

    return (
        <form className={classes.AuthForm} onSubmit={handleSubmitAuth}>
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
                    />
                </div>
                <div className={classes.FormGroup}>
                    <Input
                        name='password'
                        label='Password'
                        type='password'
                        onChange={handleChangeInput}
                        value={formState.values.password}
                    />
                </div>
                {authType === 'signup' && (
                    <div className={classes.FormGroup}>
                        <Input
                            name='passwordConfirm'
                            label='Confirm Password'
                            type='password'
                            onChange={handleChangeInput}
                            value={formState.values.passwordConfirm}
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
