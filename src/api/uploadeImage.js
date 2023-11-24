import React from 'react'
import useAxiosLocal from '../hooks/useAxiosLocal'

const uploadeImage = async (image) => {
    const axiosLocal = useAxiosLocal();

    const formData = new FormData()
    formData.append("image", image)
    const res = await axiosLocal.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`, formData)
    return res.data.data.display_url
}

export default uploadeImage