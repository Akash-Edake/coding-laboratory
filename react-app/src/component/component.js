import React from "react";
import Msg from "./basic/hello";
import Props from "./props/props";
import Propsdata from "./props/propsdata";
import Simple from "./state/usestate/simple";

let Component = () => {
  return (
    <>
      <Msg />
      <Propsdata />
      <Simple/>
    </>
  );
};
export default Component;
