import React from "react";
import { useParams } from "react-router-dom";

const Param = () => {
  //   const { productId } = useParams();
  const param = useParams();
  return (
    <div>
      New Param {param.productId}
      Param {param.meetId}
    </div>
  );
};

export default Param;
