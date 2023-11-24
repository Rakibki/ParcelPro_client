import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/routers.jsx";
import AuthProvaider from "./providers/authProvider/AuthProvider.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-5xl mx-auto">
      <QueryClientProvider client={queryClient}>
        <AuthProvaider>
          <RouterProvider router={router} />
        </AuthProvaider>
      </QueryClientProvider>
    </div>
  </React.StrictMode>
);
