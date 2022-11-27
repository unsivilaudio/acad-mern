import { Outlet, Navigate, useResolvedPath } from 'react-router-dom';

export default function Protected(props) {
    const resolved = useResolvedPath();
    console.log(resolved.pathname);

    if (!props.user)
        return (
            <Navigate
                to='/auth/login'
                state={{ redirectOnAuth: resolved.pathname }}
            />
        );

    return <Outlet />;
}
