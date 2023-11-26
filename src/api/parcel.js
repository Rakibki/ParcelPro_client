import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../hooks/useAxiosSecure"


const axiosSecure = useAxiosSecure()
 
export const getAllParcel =  () => {
    const { isPending, error, refetch, data:allParcel } = useQuery({
        queryKey: ['appPacel'],
        queryFn: async ()  => {
            const res = await axiosSecure.get("/parcels")
            return res?.data
        }
      })
      return [allParcel, refetch]
}