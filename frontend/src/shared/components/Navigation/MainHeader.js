import classes from './MainHeader.module.scss';

export default function MainHeader(props) {
    return <header className={classes.MainHeader}>{props.children}</header>;
}
