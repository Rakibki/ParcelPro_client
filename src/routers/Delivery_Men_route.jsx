import React, { useContext } from 'react'
import useRole from '../hooks/useRole'
import { authContext } from '../providers/authProvider/AuthProvider';
import Loader from '../components/loader/Loader';
import { Navigate } from 'react-router-dom';

const Delivery_Men_route = ({children}) => {
    const [role, isPending] = useRole();
    const {user, loadding} = useContext(authContext)

    if(loadding || isPending) {
        return <Loader />
    }

    if(role === 'Delivery_Men') {
        return children
    }

    return <Navigate to={"/"} />
}

export default Delivery_Men_route