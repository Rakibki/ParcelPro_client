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

export const all_users = () => {
    const { isPending, error, data:users, refetch } = useQuery({
        queryKey: ['all_users'],
        queryFn: async () => {
            const res = axiosSecure.get("/users")
            return res
        }
      })
      return [users, isPending, refetch]
} 