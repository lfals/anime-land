import React from "react";
import { useParams } from "react-router-dom";

export default function Watch() {
  const { id } = useParams();

  console.log(id);

  return (
    <>
      <div>Watch {id}</div>
    </>
  );
}
