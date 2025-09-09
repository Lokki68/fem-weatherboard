import type React from "react";
import Header from "./Header";
import Hero from "./Hero";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <Hero />
      {children}
    </div>
  );
};

export default Layout;
