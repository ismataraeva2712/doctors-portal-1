import React from 'react';
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';
const Form = () => {
    return (
        <section style={{ background: `url(${appointment})`, height: "450px" }}>
            <div className='py-10'>
                <h2 className='text-xl text-primary text-center'>Contact Us</h2>
                <h1 className='text-3xl text-white text-center'>Stay Connected With Us</h1>
            </div>
            <div className='flex justify-center items-center' >
                <div>
                    <form action="">
                        <input type="text" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" />
                        <br /> <br />
                        <input type="text" placeholder="Subject" className="input input-bordered input-accent w-full max-w-xs" />
                        <br /> <br />
                        <input type="text" placeholder="Your message" className="input input-bordered input-accent w-full max-w-xs" />
                        <br />
                        <br />
                        <div className='text-center'> <Button>Submit</Button></div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Form;