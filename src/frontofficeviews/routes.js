/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./views/dashboard.js";
import Register from "./views/auth/Register.js";
import Login from "./views/auth/Login.js";
import Appointments from "./views/appointments/appointments";
import Office from "./views/offices/offices";
import Profile from "./views/profile/Profile";
import Dentist from "./views/dentists/dentist";

var routes = [
  {
    path: "/index",
    name: "Dental App",
    icon: "ni ni-tv-2 text-primary",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/appointments",
    name: "Appointments",
    icon: "fa fa-calendar-alt text-primary",
    component: <Appointments />,
    layout: "/admin",
  },
  {
    path: "/offices",
    name: "Office Locations",
    icon: "fa fa-building text-primary",
    component: <Office />,
    layout: "/admin",
  },
  {
    path: "/dentists",
    name: "Dentists",
    icon: "fa fa-user-doctor text-primary",
    component: <Dentist />,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-single-02 text-primary",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  }
];
export default routes;
