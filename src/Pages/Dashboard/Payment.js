import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1e33Efv3AwCzKHSoqQn7qNtzjrto0TC2JkL2dZABrwlXykdyMwO8AylGNuv1Z0P9ZDcH6NEgKZnqjxNbRNM7WL00YDQTx1E8');
const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/booking/${id}`
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>



            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 className="text-success">Hello, {appointment.patientName}</h2>
                    <h2 class="card-title">Pay for {appointment.treatment}</h2>
                    <p>Your apointment: We will see you on <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
                    <div class="card-actions justify-end">
                        <p>Please pay : ${appointment.price}</p>
                    </div>
                </div>
            </div>

            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>

                </div>
            </div>


        </div>
    );
};

export default Payment;