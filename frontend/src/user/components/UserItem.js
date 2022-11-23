import React from 'react';
import { useNavigate } from 'react-router-dom';

import Avatar from '../../shared/components/UI/Avatar';
import classes from './UserItem.module.scss';

const UserItem = props => {
    const navigate = useNavigate();

    function showDetail(e) {
        navigate(`/${props.id}/places`);
    }

    return (
        <li className={classes.UserItem} onClick={showDetail}>
            <div className={classes.Content}>
                <div className={classes.Image}>
                    <Avatar image={props.image} alt={props.name} />
                </div>
                <div className={classes.Info}>
                    <h2>{props.name}</h2>
                    <h3>
                        {props.placeCount}{' '}
                        {props.placeCount > 1 ? 'Places' : 'Place'}
                    </h3>
                </div>
            </div>
        </li>
    );
};

export default UserItem;
