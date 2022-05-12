import React from 'react';
import Button from '../Shared/Button';
import Appointment from './Appointment';

const ServiceAppoinment = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div>
            <div className="card max-w-sm lg:max-w-lg mx-auto bg-base-100 shadow-xl text-center">
                <div className="card-body">
                    <h2 className="text-xl font-bold text-center text-secondary ">{name}</h2>
                    <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No slot available</span>}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}  available</p>
                    <div className="card-actions justify-center">

                        <label
                            htmlFor="booking-modal"
                            onClick={() => setTreatment(service)} disabled={slots.length === 0}
                            className="btn btn-primary uppercase text-white font-bold  bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceAppoinment;