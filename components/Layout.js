import React, { memo } from "react";
const Layout = memo(({ children }) => {
  return (
    <React.Fragment>
      <div className="container">{children}</div>
    </React.Fragment>
  );
});
export default Layout;
