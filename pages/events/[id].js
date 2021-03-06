import {useRouter, withRouter} from 'next/router';
import { getEventById } from '../../dummy-data';
import {Fragment} from 'react';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

function EventDetails() {
const router = useRouter();
let id = router.query.id;
const event = getEventById(id);

if (!event) {
    return (
    <Fragment>
    <ErrorAlert>
    <p>No Event found!</p>
    </ErrorAlert>
    </Fragment>
    );
}

return(
        <div>
            <Fragment>
                <EventSummary title={event.title}/>
                <EventLogistics 
                date={event.date} 
                address={event.location}
                image={event.image}
                imageAlt={event.title}/>
                <EventContent>
                    <p>{event.description}</p>
                </EventContent>
            </Fragment>

        </div>
    )
}

export default EventDetails;