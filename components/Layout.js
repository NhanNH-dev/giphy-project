import React from "react";

import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <h2>footer</h2>
    </React.Fragment>
  );
};
export default Layout;
