import { createBrowserRouter } from "react-router";
import RootLayOut from "./RootLayOut";
import Home from "./Home";
import Doctors from "./Doctors";
import Loading from "./Loading";
import DoctorDetails from "./DoctorDetails";
import Appointments from "./Appointments";

export const router = createBrowserRouter([
    {
        path : '/', 
        element : <RootLayOut></RootLayOut>, 
        children : [
            {
                index: true, 
                element : <Home></Home>
            }, 
            {
                path : '/doctors', 
                element: <Doctors></Doctors>, 
                loader : () => fetch('doctors.json'), 
                hydrateFallbackElement: <Loading></Loading>
            }, 
            {
                path : '/doctors-details/:id', 
                element : <DoctorDetails></DoctorDetails>, 
                loader : async ({ params }) => {
                    const {id} = params;
                    const data = await fetch('/doctors.json'); 
                    const res = await data.json(); 
                    const doctor = res.find((doctor) => doctor.id === parseInt(id));
                    return doctor;
                }, 
                hydrateFallbackElement: <Loading></Loading>
            }, 
            {
                path: '/appointments', 
                element: <Appointments></Appointments>
            }
        ]
    }
])