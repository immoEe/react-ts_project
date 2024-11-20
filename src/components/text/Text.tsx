import React from "react";
import IProps from "../../types";

const Text = ({ children, classname }: IProps) => {
  return <div className={classname}>{children}</div>;
};

export default Text;
