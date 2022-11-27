import { Link } from 'react-router-dom';

import { ReactComponent as ErrorIcon } from '../../assets/svg/error-icon.svg';
import classes from './Error404.module.scss';

export default function Error404(props) {
    return (
        <div className={classes.Error404}>
            <div className={classes.Header}>
                <div className={classes.Icon}>
                    <ErrorIcon />
                </div>
                <p>Oops. We looked everywhere and couldn't find that!</p>
            </div>
            <div className={classes.Actions}>
                <Link to='/'>&larr; Back to reality?</Link>
            </div>
        </div>
    );
}
