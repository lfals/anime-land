import { getInMs } from "@helpers";
import React, { useState } from "react";
import jwtDecode from "jwt-decode";

interface Iuser {
  sub: string;
  name: string;
  iat: number;
  email: string;
}

export default function useAuth() {
  const [isAuth, setIsAuth] = useState(false);

  const jwt = localStorage.getItem("@user:id");
  if (jwt) {
    const decode: Iuser = jwtDecode(jwt);
    if (decode.iat - getInMs({ ttl: 1, type: "days" }) <= 0) {
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  } else {
    setIsAuth(false);
  }

  return [isAuth, setIsAuth];
}
