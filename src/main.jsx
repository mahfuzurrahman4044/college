import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import College from "./College/College";
import Admission from "./Admission/Admission";
import MyClass from "./MyClass/MyClass";
import CollegeDetails from "./College/CollegeDetails";
import Login from "./Account/Login/Login";
import SignUp from "./Account/SignUp/SignUp";
import AuthProvider from "./Account/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AdmissionForm from "./Admission/AdmissionForm";
import Profile from "./Account/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <College></College>,
      },
      {
        path: "/colleges/details/:id",
        element: (
          <PrivateRoute>
            <CollegeDetails></CollegeDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/collegeInfo/${params.id}`),
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/admission/form/:id",
        element: (
          <PrivateRoute>
            <AdmissionForm></AdmissionForm>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/collegeInfo/${params.id}`),
      },
      {
        path: "/myClass",
        element: (
          <PrivateRoute>
            <MyClass></MyClass>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </React.StrictMode>
);
