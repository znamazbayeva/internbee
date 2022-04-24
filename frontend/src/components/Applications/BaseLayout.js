import React from "react";

import { Helmet } from "react-helmet";

const BaseLayout = ({ children, title }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      {children}
    </React.Fragment>
  );
};

export default BaseLayout;
