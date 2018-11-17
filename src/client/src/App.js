import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css"

import Profile from "./Profile/Profile"
import Animals from "./Animals/Animals"

// static contextTypes = {
//   router: PropTypes.object
// }

// static propTypes = {
//   history: PropTypes.object.isRequired,
//   routes: PropTypes.element.isRequired
// }

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

const App = () => (
  <Router>
    <div style={{ display: "flex" }}>
      <div 
        style={{
          padding: "10px",
          width: "40%",
          background: "#f0f0f0"
        }}
      >
        <Header />
        {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
      </div>
      <div style={{ flex: 1, padding: "10px" }}>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
      </div>
    </div>
  </Router>
);
const Header = () => (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/staff">Staff</Link>
            </li>
            <li>
              <Link to="/zoo">Zoo</Link>
            </li>
            <li>
              <Link to="/animals">Animals</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
);

export default App;