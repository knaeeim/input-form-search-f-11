import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Doctor from './Doctor';

const Doctors = () => {
    const data = useLoaderData();
    const [doctors, setDoctors] = useState(data);

    const handleSearchDoctors = (e) => {
        e.preventDefault(); 
        const searchValue = e.target.search.value; 
        const filteredDoctors = data.filter((doctor) => doctor.name.toLowerCase().includes(searchValue.toLowerCase()))
        setDoctors(filteredDoctors)
    }



    return (
        <div className='my-20'>
            <div className='font-bold text-5xl text-center text-green-600'>
                <h1>Our Hospital's Doctors : {data.length}</h1>
            </div>

            <div className='mt-16 w-full'>
                <form onSubmit={handleSearchDoctors} className='flex flex-col justify-center items-center gap-10'>
                    <input className='outline-2 outline-green-700 px-4 py-3 rounded-xl w-6/12' type="search" name="search" id="" placeholder='Search your preferred Doctor'/>
                    <button className='btn btn-outline btn-success w-2/12'>Submit</button>
                </form>
            </div>

            <div className='grid grid-cols-3 justify-items-center gap-10
            mt-20'>
                {
                    doctors.map((doctor) => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;