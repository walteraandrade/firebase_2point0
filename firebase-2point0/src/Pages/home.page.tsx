import React from "react";
import { useAuthProvider } from "../Context/auth.context";
import { Dashboard } from "./dashboard.page";
import { Login } from "./login.page";

export const Home: React.FC = () => {
  const { currentUser } = useAuthProvider();
  return <>{currentUser ? <Dashboard /> : <Login />}</>;
};
