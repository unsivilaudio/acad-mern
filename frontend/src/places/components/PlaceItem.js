import Button from '../../shared/components/UI/Button';
import classes from './PlaceItem.module.scss';

export default function PlaceItem(props) {
    return (
        <li className={classes.PlaceItem}>
            <div className={classes.Image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.Info}>
                <h2>{props.title}</h2>
                <h3>{props.address}</h3>
                <p>{props.description}</p>
            </div>
            <div className={classes.Actions}>
                <Button disabled>View On Map</Button>
                <Button variant='invert'>Edit</Button>
                <Button variant='danger'>Delete</Button>
            </div>
        </li>
    );
}
