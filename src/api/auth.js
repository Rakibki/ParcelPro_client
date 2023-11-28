import useAxiosLocal from "../hooks/useAxiosLocal";
import useAxiosSecure from "../hooks/useAxiosSecure";
import {useQuery} from '@tanstack/react-query'

const axiosLocal = useAxiosLocal();
const axiosSecure = useAxiosSecure()

export const createUserDB = (user) => {
    axiosLocal.post("/users", user)
}

export const createToken = (user) => {
    axiosSecure.post("/jwt", user)
}

export const all_users = (currentPage, itemperPage) => {
    const { isPending, error, data:users, refetch } = useQuery({
        queryKey: ['all_users', currentPage],
        queryFn: async () => {
            const res = axiosSecure.get(`/users?page=${currentPage}&size=${itemperPage}`)
            return res
        }
      })
      return [users, isPending, refetch]
} 

export const getAllDeliveryMen = () => {
    const { isPending, error, data:DeliveryMen, refetch } = useQuery({
        queryKey: ['allAllDeliveryMen'],
        queryFn: async () => {
            const res = axiosSecure.get("/allAllDeliveryMen")
            return res
        }
      })
      return [DeliveryMen, isPending, refetch]
}


export const getUser = async (email) => {
    const res = await axiosSecure.get(`/user/${email}`)
    return res.data
}

export const userLength = async () => {
    const res = await axiosSecure.get(`/userLength`)
    return res?.data?.result
}