import React from "react";
import { useParams } from "react-router-dom";

export default function Room() {
  let { id } = useParams();

  return <div>Room: {id}</div>;
}
