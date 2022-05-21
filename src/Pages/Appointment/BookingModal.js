import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../.firebase.init';
import { toast } from 'react-toastify';
const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
    const [user, loading] = useAuthState(auth);
    const { _id, name, slots, price } = treatment
    const formateDate = format(date, 'PP')
    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value
        console.log(slot)
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formateDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',

            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast('sucessfull')
                if (data.success) {
                    toast(`Appointment is set,${formateDate} at ${slot}`)
                }
                else {
                    toast.error(`Allready have an Appointment on,${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch()
                setTreatment(null)

            })

    }
    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center">Booking for : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) =>
                                    <option
                                        key={index}
                                        value={slot}>{slot}
                                    </option>)
                            }

                        </select>
                        <input type="text" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' name='phone' className="btn btn-primary uppercase text-white font-bold  bg-gradient-to-r from-secondary to-primary" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;