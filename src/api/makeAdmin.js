import React from 'react'
import useAxiosSecure from '../hooks/useAxiosSecure'

const makeAdmin = async (id) => {
    const axiosSecure = useAxiosSecure();

    const res = await axiosSecure.put(`/makeAdmin/${id}`)
    return res
}

export default makeAdmin