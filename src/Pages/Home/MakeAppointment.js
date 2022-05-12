import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';
const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor}></img>

            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make an Appointment Today</h2>
                <p className='text-white py-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde mollitia est eaque esse voluptatibus aspernatur totam? Eos quia consequuntur libero, cum consectetur aspernatur, inventore itaque voluptatibus eaque est minus. Ipsa perferendis quos voluptate blanditiis id nam corporis molestias. Distinctio, doloremque.</p>
                <Button>Get Started</Button>
            </div>
        </section>
    );
};

export default MakeAppointment;