import React from "react";
import Msg from "./basic/hello";
// import Props from "./props/props";
import Propsdata from "./props/propsdata";
import Simple from "./state/usestate/simple";
import Obj1 from "./state/usestate/obj";

let Component = () => {
  return (
    <>
      <Msg />
      <Propsdata />
      <Simple/>
      <Obj1/>
    </>
  );
};
export default Component;
