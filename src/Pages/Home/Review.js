import React from 'react';

const Review = ({ r }) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl max-w-sm lg:max-w-lg mx-auto">
                <div className="card-body">

                    <p>{r.review}</p>

                </div>
                <div className='flex items-center mx-10 mb-10'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-2">
                            <img src={r.img} />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title">{r.name}</h2>
                        <p>{r.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;