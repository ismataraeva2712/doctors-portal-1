import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../.firebase.init';
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (user || user2) {
        console.log(user || user2)
    }
    if (loading || loading2 || updating) {
        return <Loading></Loading>
    }
    let errorMessage;
    if (error || error2 || updateError) {
        errorMessage = <p className='text-red-500'>{error?.message || error2?.message || updateError?.message} </p>
    }
    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });

        navigate('/appointment')
    };
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-xl font-bold">Sign Up</h2>
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
                                    <span className="label-text">Password</span>

                                </label>
                                <input {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'must be 6 character or longer'
                                    }
                                })}
                                    type="password"
                                    placeholder="Your Password"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.password?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' &&
                                        <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                </label>
                            </div>
                            {/* ========================= */}
                            {errorMessage}
                            <input className='btn w-full max-w-xs' type="submit" value='Sign Up' />
                        </form>
                        <p><small>Allready have an account?<Link className='text-primary' to='/login'> Please login</Link></small></p>
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;