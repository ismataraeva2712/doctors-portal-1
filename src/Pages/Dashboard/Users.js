import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>All Users : {users.length}</h2>
            <table className='table w-full'>
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <UserRow
                            key={user._id}
                            user={user}
                            refetch={refetch}
                        >

                        </UserRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;