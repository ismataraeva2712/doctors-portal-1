import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'
import { toast } from 'react-toastify';
const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

    const imgStoragekey = '9b1b53ea5bbcd34cd505fac4a931f702'
    const onSubmit = async data => {
        console.log(data)
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgStoragekey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.spaciality,
                        img: img
                    }
                    // send to database
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)

                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log('doctor', inserted)
                            if (inserted.insertedId) {
                                toast.success('doctors added successfully')
                                reset()
                            }
                            else {
                                toast.error('failed added doctor')
                            }
                        })
                }
                console.log('imgbb', result)
            })

        if (isLoading) {
            return <Loading></Loading>
        }

    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>
                    <input {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is required'
                        }
                    })}
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.name?.type === 'required' &&
                            <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>
                {/* =========================== */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>

                    </label>
                    <input {...register("email", {
                        required: {
                            value: true,
                            message: 'email is required'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'use a proper email'
                        }
                    })}
                        type="email"
                        placeholder="Your email"
                        className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.email?.type === 'required' &&
                            <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' &&
                            <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                    </label>
                </div>
                {/* ============= */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">specialization</span>

                    </label>
                    <select {...register("spaciality")} class="select w-full max-w-xs input-bordered">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }

                    </select>


                </div>
                {/* ======================== */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>

                    </label>
                    <input {...register("image", {
                        required: {
                            value: true,
                            message: 'image is required'
                        }
                    })}
                        type="file"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        {errors.name?.type === 'required' &&
                            <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>
                {/* ========================= */}

                <input className='btn w-full max-w-xs' type="submit" value='Add' />
            </form>
        </div>
    );
};

export default AddDoctor;