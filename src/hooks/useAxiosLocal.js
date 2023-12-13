import axios from "axios"

const axioslocal = axios.create({
    // baseURL: 'https://server-khaki-eight.vercel.app'
    baseURL: 'http://localhost:4000'
})

const useAxiosLocal = () => {
    return axioslocal
}

export default useAxiosLocal