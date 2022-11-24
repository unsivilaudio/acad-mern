import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import classes from './MainNavigation.module.scss';

export default function MainNavigation(props) {
    const location = useLocation();
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    function toggleSideNav() {
        setShowSideDrawer(st => !st);
    }

    useEffect(() => {
        setShowSideDrawer(false);
    }, [location.pathname]);

    return (
        <>
            <SideDrawer open={showSideDrawer}>
                <NavLinks />
            </SideDrawer>
            <MainHeader>
                <div className={classes.MainNavigation}>
                    <button className={classes.Toggler} onClick={toggleSideNav}>
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
        </>
    );
}
