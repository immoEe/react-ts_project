import React from "react";
import IProps from "../../types";

const Title = ({ children, classname }: IProps) => {
  return <div className={classname}>{children}</div>;
};

export default Title;
