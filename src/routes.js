import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdAccountCircle,
  MdSupervisedUserCircle,
  MdCameraEnhance,
  MdControlCamera,
  MdLocationOn,
  MdMessage,
  MdAttachMoney
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";
import usersTable from 'views/admin/usersTable/UsersTable'
import tourGuidesTable from 'views/admin/tourGuideTable/TourGuides'
import cameraOperators from "views/admin/cameraOperators/CameraOperators"
import directors from "views/admin/directors/Directors"
import tours from "views/admin/tours/Tours"
import reveiws from"views/admin/reveiws/Reveiws"
import payment from "views/admin/payment/Payment"
import userpayment from "views/admin/userpayment/UserPayment"


// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Users Table",
    layout: "/admin",
    path: "/users-table",
    icon: <Icon as={MdAccountCircle} width='20px' height='20px' color='inherit' />,
    component: usersTable,
  },
  {
    name: "Tour Guides Table",
    layout: "/admin",
    path: "/tourguides-table",
    icon: <Icon as={MdSupervisedUserCircle} width='20px' height='20px' color='inherit' />,
    component: tourGuidesTable,
  },
  {
    name: "Camera Operators Table",
    layout: "/admin",
    path: "/cameraoperators-table",
    icon: <Icon as={MdCameraEnhance} width='20px' height='20px' color='inherit' />,
    component: cameraOperators,
  },
  {
    name: "Directors Table",
    layout: "/admin",
    path: "/directors-table",
    icon: <Icon as={MdControlCamera} width='20px' height='20px' color='inherit' />,
    component: directors,
  },
  {
    name: "Tours Table",
    layout: "/admin",
    path: "/tours-table",
    icon: <Icon as={MdLocationOn} width='20px' height='20px' color='inherit' />,
    component: tours,
  },
  {
    name: "Reveiws Table",
    layout: "/admin",
    path: "/reveiws-table",
    icon: <Icon as={MdMessage} width='20px' height='20px' color='inherit' />,
    component: reveiws,
  },
  {
    name: "Payment Table",
    layout: "/admin",
    path: "/payment-table",
    icon: <Icon as={MdAttachMoney} width='20px' height='20px' color='inherit' />,
    component: payment,
  },
  {
    name: "User Payment Table",
    layout: "/admin",
    path: "/userpayment-table",
    icon: <Icon as={MdAttachMoney} width='20px' height='20px' color='inherit' />,
    component: userpayment,
  },
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "/nft-marketplace",
  //   icon: (
  //     <Icon
  //       as={MdOutlineShoppingCart}
  //       width='20px'
  //       height='20px'
  //       color='inherit'
  //     />
  //   ),
  //   component: NFTMarketplace,
  //   secondary: true,
  // },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
  //   path: "/data-tables",
  //   component: DataTables,
  // },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },

  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "/rtl-default",
  //   icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  //   component: RTL,
  // },
];

export default routes;
