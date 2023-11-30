import useAxiosSecure from "../hooks/useAxiosSecure"

const axiosSecure = useAxiosSecure()

export const createBooking = async (bookData) => {
   const res = await axiosSecure.post("/bookings", bookData);
   return res
}

export const deleteBooking = async (id) => {
   const res = await axiosSecure.delete(`/myParcel/${id}`)
   return res?.data
}


export const updateStatus = async (id, delivaryMenId, DeliveryDate) => {
   const res = await axiosSecure.put(`/booking/${id}`, {delivaryMenId, DeliveryDate})
   return res
} 

export const updateParcelStatus = async (id, status) => {
   const res = await axiosSecure.put(`/updateParcelStatus/${id}`, {status})
   return res
} 

