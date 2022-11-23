import React from 'react';
import UsersList from '../components/UsersList';

const Users = props => {
    const __USERS = [
        {
            id: 'u1',
            name: 'Max Schwarz',
            image: 'https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg',
            places: 3,
        },
        {
            id: 'u2',
            name: 'Manu Smith',
            image: 'https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg',
            places: 5,
        },
        {
            id: 'u3',
            name: 'Alex Melton',
            image: 'https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg',
            places: 1,
        },
    ];

    return <UsersList items={__USERS} />;
};

export default Users;
