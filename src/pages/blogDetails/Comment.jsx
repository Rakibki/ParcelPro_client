import { Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import useAxiosLocal from "../../hooks/useAxiosLocal";
import Loader from "../../components/loader/Loader";
import "./style.css";
import PrimayButton from "../../components/shared/button/PrimayButton";
import { authContext } from "../../providers/authProvider/AuthProvider";
import { v4 as uuidv4 } from "uuid";

const Comment = ({ blogId }) => {
  const AxiosLocal = useAxiosLocal();
  const [commentValue, setCommnetValue] = useState("");
  const { user } = useContext(authContext);

  const { isPending, data, refetch } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await AxiosLocal.get(`/comments/${blogId}`);
      return res?.data;
    },
  });

  const handleClieck = async () => {
    if (!user && !user?.email) {
      alert("first login");
    } else {
      const commentData = {
        blogId: blogId,
        id: uuidv4(),
        userId: user?.uid,
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        message: commentValue,
        date: new Date().toLocaleDateString(),
      };

      await AxiosLocal.post("/comment", commentData);
      refetch();
      setCommnetValue("");
    }
  };

  if (isPending) {
    return <Loader />;
  }

  return (
    <Grid marginTop={4}>
      <Grid marginBottom={2} sx={{ display: "flex", alignItems: "center" }}>
        <input
          onChange={(e) => setCommnetValue(e.target.value)}
          placeholder="Add a Comment"
          className={"inputFild"}
          value={commentValue}
          style={{
            width: "100%",
            padding: "10px 20px",
            outline: "none",
            border: "1px solid #e1e1e1",
            marginTop: "5px",
          }}
        />

        <Grid onClick={handleClieck}>
          <PrimayButton>Comment</PrimayButton>
        </Grid>
      </Grid>

      <Typography fontWeight={700} variant="h5">
        Comments ({data?.length})
      </Typography>

      <Grid marginTop={3}>
        {data?.map((comment) => {
          return (
            <Grid
              sx={{ display: "fled", gap: "9px" }}
              marginBottom={2}
              key={comment?.id}
            >
              <Grid width={"100px"}>
                <img style={{width: "100%"}} src={comment?.image} alt="" />
              </Grid>

              <Grid>
                <Typography variant="h5">{comment?.name}</Typography>
                <Typography marginTop={1}>{comment?.message}</Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Comment;
