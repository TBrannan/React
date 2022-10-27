import React from "react";
import Start from "./Start";

const New = (props) => {
  //Pass to App
  const Blasted = (something) => {
    const data = {
      ...something,
    };
    props.GetBlasted(data);
  };

  return (
    <>
      <Start onBlast={Blasted} />
    </>
  );
};

export default New;
