import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authContext } from "../providers/authProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loadding } = useContext(authContext);
  const axiosSecure = useAxiosSecure();

  const {
    isPending,
    error,
    data: role,
  } = useQuery({
    enabled: !loadding || !!user?.email,
    queryKey: ["getRole"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/getRole/${user?.email}`);
      return res?.data?.role;
    },
  });
  return [role, isPending];
};

export default useRole;
