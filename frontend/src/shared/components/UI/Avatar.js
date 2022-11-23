import classes from './Avatar.module.scss';

export default function Avatar(props) {
    return (
        <div className={classes.Avatar}>
            <img src={props.image} alt={props.alt} />
        </div>
    );
}
