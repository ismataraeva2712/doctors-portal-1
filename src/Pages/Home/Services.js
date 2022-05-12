import React from 'react';
import Service from './Service';
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {
    const ServiceItem = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center text-3xl '>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h4>Services we provide</h4>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    ServiceItem.map(s => <Service
                        s={s}
                        key={s._id}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;