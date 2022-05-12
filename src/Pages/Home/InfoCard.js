import React from 'react';

const InfoCard = ({ img, title, bgclassName }) => {
    return (
        <div className={`card card-side bg-accent shadow-xl max-w-sm lg:max-w-lg mx-auto ${bgclassName}`}>
            <figure className='pl-5 pt-5'><img src={img} alt="Movie" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title ">{title}</h2>
                <p>Click the button to watch on Jetflix app.</p>

            </div>
        </div>
    );
};

export default InfoCard;