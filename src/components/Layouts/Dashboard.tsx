import React, { ReactNode } from "react";
import AsideAndTop from './Aside';

interface LayoutDashboardProps {
  // Define any props needed by LayoutDashboard component
  children : ReactNode
}

const LayoutDashboard: React.FC<LayoutDashboardProps> = ({ children }) => {
  return (
    <div>
      {/* ... Your layout code */}
      <AsideAndTop children={children} />
      {/* {children} */}
    </div>
  );
};

export default LayoutDashboard;
