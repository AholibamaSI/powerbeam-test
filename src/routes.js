/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// core components/views for Admin layout
import VehicleList from "./components/VehicleList.js";
import SeeVehicle from "./components/SeeVehicle.js";



const dashboardRoutes = [
  {
    path: "/vehicles",
    name: "Vehicles",
    component: VehicleList,
    layout: "/admin"
  },
  {
    path: "/see-vehicle",
    name: "See-Vehicle",
    component: SeeVehicle,
    layout: "/admin"
  }
];

export default dashboardRoutes;
