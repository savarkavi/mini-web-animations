import React, { ReactNode } from "react";
import Menu from "./Menu";

const NavigationMenu1Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-screen">
      {children}
      <Menu />
    </main>
  );
};

export default NavigationMenu1Layout;
