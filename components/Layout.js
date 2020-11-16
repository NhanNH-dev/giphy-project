import React from "react";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className='container'>{children}</div>
    </React.Fragment>
  );
};
export default Layout;
