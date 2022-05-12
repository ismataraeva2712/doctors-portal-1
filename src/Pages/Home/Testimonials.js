import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonials = () => {
    const review = [
        {
            _id: 1,
            name: 'winson Herry',
            review: 'very good service.It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            location: 'california'
        },
        {
            _id: 2,
            name: 'Thomson perker',
            review: 'very good service.It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            location: 'Florida'
        },
        {
            _id: 3,
            name: 'miley Herry',
            review: 'very good service.It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            location: 'new york'
        },
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div >
                    <h4 className='text-xl text-primary font-bold'> Testimonials</h4>
                    <h2 className='text-3xl'>What our patients say</h2>
                </div>
                <div className=''>
                    <img className='lg:w-48 w-24' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    review.map(r => <Review
                        key={r._id}
                        r={r}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;