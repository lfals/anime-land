import { Home, Login, Register } from "@views";
import Room from "@views/rooms/rooms.views";
import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export default function RoutesConfig() {
  const isAuth = true;

  return (
    <>
      <Routes>
        {!isAuth ? (
          <>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route index element={<Home />} />
            <Route path="/room/:id" element={<Room />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </>
  );
}
