import { NavLink } from 'react-router-dom';

import classes from './NavLinks.module.scss';

export default function NavLinks(props) {
    return (
        <ul className={classes.NavLinks}>
            <li className={classes.Item}>
                <NavLink to='/'>All Users</NavLink>
            </li>
            <li className={classes.Item}>
                <NavLink to='/u1/places'>My Places</NavLink>
            </li>
            <li className={classes.Item}>
                <NavLink to='/places/new'>Add Place</NavLink>
            </li>
            <li className={classes.Item}>
                <NavLink
                    to='/auth/login'
                    className={({ isActive }) => {
                        return isActive ||
                            window.location.pathname.includes('signup')
                            ? 'active'
                            : '';
                    }}>
                    Login
                </NavLink>
            </li>
        </ul>
    );
}
