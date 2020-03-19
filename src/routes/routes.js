// import React from "react";

// import { Redirect, BrowserRouter, Switch, Route } from "react-router-dom";
import { MdLocationOn, MdPerson, MdDashboard } from "react-icons/md";
import { FaQrcode, FaRegCommentDots } from "react-icons/fa";
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
// @material-ui/icons
import ListQRCodes from "../views/Retail/ListQrCodes";
import ListFeedback from "../views/Retail/ListFeedback";
import CreateShop from "../views/Retail/CreateShop/CreateShop.js";
import CreateCoupon from "../views/Retail/CreateCoupon/CreateCoupon.js";
import RetailDashboardPage from "../views/Retail/Dashboard/Dashboard.js";
import RetailProfile from "../views/Retail/RetailProfile/RetailProfile.js";

import CustomerDashboardPage from "../views/Customer/Dashboard/Dashboard.js";
import CustomerProfile from "../views/Customer/CustomerProfile/CustomerProfile.js";

import { getTu } from '../services/auth';


const retailPath = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: MdDashboard,
    component: RetailDashboardPage,
    layout: "/retail"
  },
  {
    path: "/user",
    name: "Perfil",
    icon: MdPerson,
    component: RetailProfile,
    layout: "/retail"
  },
  {
    path: "/list-feedbacks",
    name: "Listar Feedbacks",
    icon: FaRegCommentDots,
    component: ListFeedback,
    layout: "/retail"
  },
  {
    path: "/list-qr",
    name: "Listar QR codes",
    icon: FaQrcode,
    component: ListQRCodes,
    layout: "/retail"
  },
  {
    path: "/shop",
    name: "Cadastrar Loja",
    icon: MdLocationOn,
    component: CreateShop,
    layout: "/retail"
  },
  {
    path: "/create-coupon",
    name: "Cadastrar Cupom",
    icon: ConfirmationNumberIcon,
    component: CreateCoupon,
    layout: "/retail"
  }
];

const customerPath = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: MdDashboard,
    component: CustomerDashboardPage,
    layout: "/customer"
  },
  {
    path: "/user",
    name: "Perfil",
    icon: MdPerson,
    component: CustomerProfile,
    layout: "/customer"
  },

];

const dashboardRoutes = getTu() === '897316929176464ebc9ad085f31e7284' ? customerPath : retailPath

export default dashboardRoutes;
