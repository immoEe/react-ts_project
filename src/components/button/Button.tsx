import React from "react";
import "./Button.css";
import IProps from "../../types";

const Button = ({ children, classname }: IProps) => {
  return <button className={classname}>{children}</button>;
};

export default Button;
