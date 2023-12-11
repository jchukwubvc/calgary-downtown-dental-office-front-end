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
import React from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "frontofficeviews/components/Navbars/AdminNavbar.js";
import AdminFooter from "frontofficeviews/components/Footers/AdminFooter.js";
import Sidebar from "frontofficeviews/components/Sidebar/Sidebar.js";

import routes from "frontofficeviews/routes.js";
import {getUserToken} from "../components/AuthContext";

const adminRoutes = routes.slice(0, -2);

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();


  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {

    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < adminRoutes.length; i++) {
      if (
        props?.location?.pathname.indexOf(adminRoutes[i].layout + adminRoutes[i].path) !==
        -1
      ) {
        return adminRoutes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      {/*<Sidebar*/}
      {/*  {...props}*/}
      {/*  routes={adminRoutes}*/}
      {/*  logo={{*/}
      {/*    innerLink: "/admin/index",*/}
      {/*    imgSrc: require("../assets/img/brand/argon-react.png"),*/}
      {/*    imgAlt: "...",*/}
      {/*  }}*/}
      {/*/>*/}
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props?.location?.pathname)}
          userInfo = {getUserToken()}
        />
        <Routes>
          {getRoutes(adminRoutes)}
          <Route path="*" element={<Navigate to="/admin/index" replace />} />
        </Routes>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Admin;
