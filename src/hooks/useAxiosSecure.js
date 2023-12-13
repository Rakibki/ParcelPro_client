import axios from "axios"

const axiosSecure = axios.create({
    // baseURL: 'https://server-khaki-eight.vercel.app',
    baseURL: 'http://localhost:4000',
    withCredentials: true
})

const useAxiosSecure = () => {
  return axiosSecure
}

export default useAxiosSecure