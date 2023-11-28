import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/routers.jsx";
import AuthProvaider from "./providers/authProvider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Container, Grid } from "@mui/material";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Grid marginX={"auto"} maxWidth={"1300px"}>
      <QueryClientProvider client={queryClient}>
        <AuthProvaider>
          <RouterProvider router={router} />
        </AuthProvaider>
      </QueryClientProvider>
    </Grid>
  </React.StrictMode>
);
