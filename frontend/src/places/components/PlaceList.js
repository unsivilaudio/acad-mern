import PlaceItem from './PlaceItem';
import classes from './PlaceList.module.scss';

export default function PlaceList(props) {
    let content = <h3>No Places Found.</h3>;

    if (props.items.length) {
        content = props.items.map(place => (
            <PlaceItem
                key={place.id}
                id={place.id}
                image={place.imageUrl}
                title={place.title}
                address={place.address}
                description={place.description}
                creator={place.creatorId}
                coordinates={place.location}
            />
        ));
    }

    return <ul className={classes.PlaceList}>{content}</ul>;
}
