import React from 'react';
import chair from '../../assets/images/chair.png'
import Button from '../Shared/Button';
import bg from '../../assets/images/bg.png'
const Banner = () => {
    return (
        <div>
            <div style={{ background: `url(${bg})`, backgroundSize: 'cover' }} className="hero min-h-screen mb-20">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={chair} className="lg:max-w-[590px] rounded-lg shadow-2xl ml-5" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;