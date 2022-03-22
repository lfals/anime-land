import {
  Home,
  Login,
  Register,
  Room,
  WatchList,
  Friends,
  Parties,
} from "@views";
import { Navigate, Route, Routes } from "react-router-dom";

export default function RoutesConfig() {
  const isAuth = false;

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
            <Route path="/watch-list" element={<WatchList />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/parties" element={<Parties />} />
            <Route path="/parties/:id" element={<Room />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </>
  );
}
