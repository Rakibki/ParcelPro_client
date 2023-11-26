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


export const updateStatus = async (id, delivaryMenId) => {
   const res = await axiosSecure.put(`/booking/${id}`, {delivaryMenId})
   return res
} 