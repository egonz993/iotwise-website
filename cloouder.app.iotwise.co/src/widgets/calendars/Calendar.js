import React from 'react'
import FullCalendar from '@fullcalendar/react'
import { ErrorBoundary } from '../../error-boundary/ErrorBoundary'
import { useComponent } from '../../../hooks/useComponent'
import { PendingComponent } from '../others/PendingComponent'

// Plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import timegridPlugin from '@fullcalendar/timegrid'
import multiMonthPlugin from '@fullcalendar/multimonth'
import interactionPlugin from "@fullcalendar/interaction"
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

// import the third-party stylesheets directly from your JS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // needs additional webpack config!


export const Calendar = (props) => {
    const {pending, _data, _options} = useComponent(props)

    const events = _data.events

    const handleDateClick = (event) => {
        console.log(event);
    }
    
    const handleEventClick = (event) => {
        console.log(event);
    }


    return (
        pending ? <PendingComponent /> :
        <ErrorBoundary>
            <FullCalendar
                plugins={[dayGridPlugin, timegridPlugin, multiMonthPlugin, interactionPlugin, bootstrap5Plugin]}
                themeSystem='bootstrap5'
                dateClick={(event) => handleDateClick(event)}
                eventClick={(event) => handleEventClick(event)}
                events={events}
                {..._options}
            />
        </ErrorBoundary>
    )
}
