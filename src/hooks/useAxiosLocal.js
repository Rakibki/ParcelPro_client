import axios from "axios"

const axioslocal = axios.create({
    // baseURL: ' https://parcel-lime.vercel.app'
    baseURL: 'http://localhost:4000'
})

const useAxiosLocal = () => {
    return axioslocal
}

export default useAxiosLocal