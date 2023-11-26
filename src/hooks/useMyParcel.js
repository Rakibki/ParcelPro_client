import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authContext } from "../providers/authProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";



const useMyParcel = async () => {
    const {user, loadding} = useContext(authContext)
    const AxiosSecure = useAxiosSecure()

    const { isPending, error, refetch, data:myParcel } = useQuery({
        queryKey: ['MyPercel'],
        enabled: !loadding && !!user?.email,
        queryFn: async () => {
            const res = await AxiosSecure.get(`/myParcel/${user?.email}`);
            return res
        }
      })
      return [myParcel, refetch]
    }


export default useMyParcel