import { useContext } from "react"
import { authContext } from "../providers/authProvider/AuthProvider"
import useAxiosSecure from "../hooks/useAxiosSecure"


const getIdbyEmail = async () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(authContext)    
    const res = await axiosSecure.get(`/getIdbyEmail/${user?.email}`)
    return res?.data?.userId
}

export default getIdbyEmail