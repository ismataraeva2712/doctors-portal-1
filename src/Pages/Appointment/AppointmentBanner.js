import React from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} class=" lg:max-w-[590px]  max-w-sm rounded-lg shadow-2xl lg:ml-20" />
                    <div className='lg:max-w-[590px] lg:mr-20'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;