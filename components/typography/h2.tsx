import React, { ReactNode } from "react";
import Balancer from "react-wrap-balancer";

const H2Title = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 py-5">
      <Balancer> {children}</Balancer>
    </h2>
  );
};

export default H2Title;
