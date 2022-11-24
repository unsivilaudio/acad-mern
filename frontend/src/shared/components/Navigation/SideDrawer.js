import classes from './SideDrawer.module.scss';

export default function SideDrawer(props) {
    const sideDrawerStyles = [classes.SideDrawer];
    if (props.open) {
        sideDrawerStyles.push(classes.Open);
    }

    return <div className={sideDrawerStyles.join(' ')}>{props.children}</div>;
}
