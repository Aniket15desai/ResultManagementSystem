import React from 'react';
import { DashboardCards } from '../components';
import '../styles/Dashboard.css';

const Dashboard = (props) => {
return (
        <div className={`${props.showMobile ? 'py-3' : 'p-5'}`}>
            <DashboardCards showMobile={props.showMobile} />
        </div>
    )
}

export default Dashboard