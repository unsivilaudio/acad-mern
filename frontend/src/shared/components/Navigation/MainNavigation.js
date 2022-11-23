import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import classes from './MainNavigation.module.scss';
import NavLinks from './NavLinks';

export default function MainNavigation(props) {
    return (
        <MainHeader>
            <div className={classes.MainNavigation}>
                <button className={classes.Toggler}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className={classes.Brand}>
                    <Link to='/'>Elysium</Link>
                </h1>
                <nav className={classes.Nav}>
                    <NavLinks />
                </nav>
            </div>
        </MainHeader>
    );
}
