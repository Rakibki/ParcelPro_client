import React from 'react'
import useAxiosSecure from '../hooks/useAxiosSecure';

const makeDeliveryMan = async (id) => {
    const axiosSecure = useAxiosSecure();
    const res = await axiosSecure.put(`/makeDeliveryMan/${id}`)
    return res

}

export default makeDeliveryMan