import { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure"
import {useQuery} from "@tanstack/react-query"

// export const myDelivery = async (id) => {
//     const  axiosSecure = useAxiosSecure();
//     const { isPending, error, refetch,  data  } = useQuery({
//         queryKey: ['myDeliveryList'],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/myDelivery/${id}`)
//             return res
//         }
//       })

//       return data
//     }


