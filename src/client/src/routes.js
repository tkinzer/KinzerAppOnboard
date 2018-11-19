import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Profile from "./Profile/Profile"
import Animals from "./Animals/Animals"


const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div></div>,
      main: () => <h2>Home</h2>
    },
    {
      path: "/about",
      sidebar: () => <div>shoelaces!</div>,
      main: () => <h2>Shoelaces</h2>
    },
    {
      path: "/animals",
      sidebar: () => <div></div>,
      main: () => <Animals />
    },
    {
      path: "/zoo",
      sidebar: () => <div></div>,
      main: () => <h2>Zoo </h2>
    },
    {
      path: "/admin",
      sidebar: () => <div></div>,
      main: () => <h2>Admin</h2>
    }
  ]

  export default routes