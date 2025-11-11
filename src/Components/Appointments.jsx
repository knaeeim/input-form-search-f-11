import React, { useContext } from 'react';
import { AppContext } from '../Context/CreateContext';
import Doctor from './Doctor';

const Appointments = () => {
    const {appointments} = useContext(AppContext);
    console.log(appointments);
    return (
        <div className='m-20 grid grid-cols-3'>
            {
                appointments.map((doctor) => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
            }
        </div>
    );
};

export default Appointments;