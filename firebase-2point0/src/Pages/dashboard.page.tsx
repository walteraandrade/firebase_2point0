import React from "react";
import { useHistory } from "react-router-dom";
import { useFlashMessage } from "../Components/flash-message/flash-message.provider";
import { useAuthProvider } from "../Context/auth.context";
import { Styled } from "./dashboard-style";

export const Dashboard: React.FC = () => {
  const history = useHistory();
  const { currentUser, logout } = useAuthProvider();
  const [error, setError] = React.useState<string>("");
  const { showFlashMessage } = useFlashMessage();
  const handleLogout = async () => {
    try {
      await logout();
      history.push("/login");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Styled.Card>
      Dashboard
      <p>Email: {currentUser?.email}</p>
      {error && showFlashMessage(error)}
      <Styled.Button onClick={handleLogout}>Logout</Styled.Button>
    </Styled.Card>
  );
};
