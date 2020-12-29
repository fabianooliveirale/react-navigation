import React from "react";

import { useParams } from "react-router-dom";

export default (props) => {
  const { id } = useParams();
  return (
    <div>
      <h1>olá mundo</h1>
      <p>Param: {id}</p>
    </div>
  );
};
