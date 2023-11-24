import axios from "axios"

const axioslocal = axios.create({
    baseURL: 'http://localhost:4000'
})

const useAxiosLocal = () => {
    return axioslocal
}

export default useAxiosLocal