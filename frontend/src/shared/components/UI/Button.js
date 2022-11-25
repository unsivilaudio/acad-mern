import { Link } from 'react-router-dom';

import classes from './Button.module.scss';

export default function Button(props) {
    const btnClasses = [classes.Button];
    const { type = 'button', variant = 'primary', disabled, onClick } = props;

    switch (variant) {
        case 'primary':
            btnClasses.push(classes.Primary);
            break;
        case 'tertiary':
            btnClasses.push(classes.Tertiary);
            break;
        case 'danger':
            btnClasses.push(classes.Danger);
            break;
        case 'invert':
            btnClasses.push(classes.Invert);
            break;
        default:
            break;
    }

    const buttonClsName = btnClasses.join(' ');

    if (props.to) {
        return (
            <Link className={buttonClsName} to={props.to} disabled>
                {props.children}
            </Link>
        );
    }

    return (
        <button
            className={buttonClsName}
            onClick={onClick}
            type={type}
            disabled={disabled}>
            {props.children}
        </button>
    );
}
