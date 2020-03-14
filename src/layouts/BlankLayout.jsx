import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => <>
  <Helmet>
    <title>{"MIM"}</title>
    <meta name="description" content={"MIM"} />
  </Helmet>
  {children}
  </>;

export default Layout;
