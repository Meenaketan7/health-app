import React from 'react';
import PublicRoutes from './routes/public';
import PrivateRoutes from './routes/private';

const Router = () => {
  const user = null;
  return user ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Router;
