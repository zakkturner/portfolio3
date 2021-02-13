import React from "react";
import "./page.module.scss";

const Page = ({ children }) => {
  return <div className="page">{children}</div>;
};

export default Page;
