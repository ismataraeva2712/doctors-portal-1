import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

import ServiceAppoinment from './ServiceAppoinment';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Services from './../Home/Services';
import Loading from '../Shared/Loading';
const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    const formatedDate = format(date, 'PP')
    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () => fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formatedDate])
    return (
        <div>
            <p className='text-xl text-secondary text-center font-bold my-10'>Available Appointment on: {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <ServiceAppoinment
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}

                    ></ServiceAppoinment>)
                }
            </div>
            {treatment && <BookingModal date={date} setTreatment={setTreatment} treatment={treatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;