import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import MyAppoinments from './MyAppoinments';
import Appointment from './../Appointment/Appointment';



const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="Dashboard-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <h2 className='text-2xl text-purple-500'>Welcome to your Dashboard</h2>

                    <Outlet></Outlet>


                </div>
                <div class="drawer-side">
                    <label for="Dashboard-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        <li><Link to='/dashboard/myreview'>Reviews</Link></li>
                        <li><Link to='/dashboard/history'>History</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;