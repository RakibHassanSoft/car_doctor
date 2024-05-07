import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
   const location = useLocation();
//    console.log(location.pathname)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user?.email){
        return children;
    }

    // return <Navigate state={{from :location}} to="/login" replace></Navigate>
    return <Navigate state={location.pathname} to="/login" replace></Navigate>
};

export default PrivetRoute;