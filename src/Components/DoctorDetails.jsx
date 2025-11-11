import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AppContext } from '../Context/CreateContext';

const DoctorDetails = () => {
    const doctor = useLoaderData(); 
    const {handleAppointment} = useContext(AppContext);
    const {name, image, experience, speciality, workingAt, fees, education} = doctor;
    return (
        <div className='my-20 flex justify-center items-center gap-10 w-full'>
            {/* image div */}
            <div className='w-[500px]'>
                <img className='rounded-xl' src={image} alt="" />
            </div>

            {/* text div */}
            <div className='space-y-8'>
                <h1 className='text-4xl text-green-500 font-bold'>Name : {name}</h1>
                <h1>Experience : {experience}</h1>
                <h1>Speciality : {speciality}</h1>
                <h1>Working At : {workingAt}</h1>
                <h1>education : {education}</h1>
                <h1>Fees : {fees}</h1>

                <div>
                    <button onClick={() => handleAppointment(doctor)} className='btn btn-active text-xl'>Book your Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;