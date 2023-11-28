import axios from "axios"

const axioslocal = axios.create({
    baseURL: 'https://server-omega-ten-11.vercel.app'
})

const useAxiosLocal = () => {
    return axioslocal
}

export default useAxiosLocal