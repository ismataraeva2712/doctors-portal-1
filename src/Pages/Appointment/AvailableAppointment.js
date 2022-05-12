import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

import ServiceAppoinment from './ServiceAppoinment';
import BookingModal from './BookingModal';
const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p className='text-xl text-secondary text-center font-bold'>Available Appointment on: {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceAppoinment
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></ServiceAppoinment>)
                }
            </div>
            {treatment && <BookingModal date={date} setTreatment={setTreatment} treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;