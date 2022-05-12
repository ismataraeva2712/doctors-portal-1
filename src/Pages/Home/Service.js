import React from 'react';

const Service = ({ s }) => {
    return (
        <div className="card max-w-sm lg:max-w-lg mx-auto  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={s.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{s.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

            </div>
        </div>
    );
};

export default Service;