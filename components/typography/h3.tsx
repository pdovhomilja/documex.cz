import React, { ReactNode } from "react";
import Balancer from "react-wrap-balancer";

const H3Title = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      <Balancer> {children}</Balancer>
    </h3>
  );
};

export default H3Title;
