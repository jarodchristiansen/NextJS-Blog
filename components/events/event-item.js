import Link from 'next/link';

import classes from './event-item.module.css';
import Button from '../ui/button';

function EventItem(props) {
    const {title, image, date, location, id} = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {day: 'numeric', month:'long', year:'numeric'})
    
    const fomrattedAddress = location.replace(', ', '\n')
    const exploreLink = `/events/${id}`;
    return (
    <li className={classes.item}>
    <img className={classes.img} src={'/' + image} alt=''/>
    <div className={classes.content}>
    <div>
        <h2>{title}</h2>
    </div>
    <div>
        <time className={classes.time}>{humanReadableDate}</time>
    </div>
    <div>
        <address className={classes.address}>{fomrattedAddress}</address>
    </div>
    <div>
    <Button link={exploreLink}>Explore Event</Button>
    </div>
    </div>
    </li>
    )
}

export default EventItem;