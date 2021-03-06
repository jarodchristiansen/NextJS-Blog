import DateIcon from '../icons/date-icon';
import classes from './event-item.module.css';
import Button from '../ui/button';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

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
    <div className={classes.date}>
        <DateIcon />
        <time >{humanReadableDate}</time>
    </div>
    <div className={classes.address}>
        <AddressIcon  />
        <address >{fomrattedAddress}</address>
    </div>
    <div>

    <Button link={exploreLink}>
        <span>Explore Event</span>
        <span className={classes.icon}><ArrowRightIcon/></span>
        </Button>
    </div>
    </div>
    </li>
    )
}

export default EventItem;