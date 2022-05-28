import React from "react";

let Propsdata =(data)=>{
return(
   <>
    {data.children}
  <div>My Name is {data.name} and i'm {data.dev}</div>
  {data.children}
   </>
)
}
export default Propsdata;