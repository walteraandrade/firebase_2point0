import React from "react";
import { FlashMessageProvider } from "./Components/flash-message/flash-message.provider";
import { AuthProvider } from "./Context/auth.context";
import { Home } from "./Pages/home.page";
import { Routes } from "./routes";

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <FlashMessageProvider>
        <Routes />
      </FlashMessageProvider>
    </AuthProvider>
  );
};

export default App;
