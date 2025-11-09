import React from 'react';

const Doctor = ({ doctor }) => {
    const {name, image, experience, speciality, workingAt, fees, education} = doctor;
    return (
        <div className=''>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">{experience}</div>
                    </h2>
                    <p>{education} - {speciality}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{workingAt}</div>
                        <div className="badge badge-outline">{fees}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;