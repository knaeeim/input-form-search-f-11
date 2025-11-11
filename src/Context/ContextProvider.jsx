import React, { useState } from 'react';
import { AppContext } from './CreateContext';
import { useNavigate } from 'react-router';

const ContextProvider = ({children}) => {
    const naviagte = useNavigate();
    const[appointments, setAppointments] = useState([]); 

    const handleAppointment = (doctor) => {
        setAppointments((prev)=> [...prev, doctor]);
        naviagte('/appointments')
    }

    const obj = {
        handleAppointment, 
        appointments
    }

    return (
        <AppContext value={obj}>
            {children}
        </AppContext>
    );
};

export default ContextProvider;