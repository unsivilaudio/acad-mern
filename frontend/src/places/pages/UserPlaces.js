import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const __USER_PLACES = [
    {
        id: 'p1',
        title: 'Luxor Hotel & Casino',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/2/2a/Las_Vegas_Luxor_04.jpg',
        address: '3900 S Las Vegas Blvd, Las Vegas, NV 89119',
        description:
            'One of the most recognizable resorts in Las Vegas is the 30-story pyramid of Luxor Hotel & Casino.',
        location: {
            lat: 36.09551,
            lng: -115.1782559,
        },
        creator: 'u1',
    },
    {
        id: 'p2',
        title: 'Times Square',
        imageUrl:
            'https://www.nycgo.com/images/venues/152/tripadvisortimessquare_taggeryanceyiv_5912__large.jpg',
        address: 'Manhattan, NY 10036',
        description:
            'Times Square is a major commercial intersection, tourist destination, entertainment hub, and neighborhood in Midtown Manhattan.',
        location: {
            lat: 40.7591501,
            lng: -73.9957232,
        },
        creator: 'u2',
    },
];

export default function UserPlaces(props) {
    const params = useParams();
    const title = `Elysium | ${params.userId} user places`;
    const description = "A list of a specific user's places.";

    const userPlaces = __USER_PLACES.filter(
        place => place.creator === params.userId
    );

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta property='og:title' content={title} />
                <meta property='og:description' content={description} />
            </Helmet>
            <PlaceList items={userPlaces} />
        </>
    );
}
