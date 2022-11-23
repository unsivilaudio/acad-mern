import React from 'react';

import UserItem from './UserItem';
import classes from './UsersList.module.scss';

const UsersList = props => {
    let content = <div className='center'>No users found.</div>;

    if (props.items.length) {
        content = props.items.map(user => (
            <UserItem
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                placeCount={user.places}
            />
        ));
    }

    return <ul className={classes.UserList}>{content}</ul>;
};

export default UsersList;
