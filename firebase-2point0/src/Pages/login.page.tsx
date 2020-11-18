import React from "react";
import { Button } from "../Components/button-component";
import { useFlashMessage } from "../Components/flash-message/flash-message.provider";
import { H1 } from "../Components/typography";
import { useAuthProvider } from "../Context/auth.context";
import { Styled } from "./signup.page.style";

export const Login: React.FC = () => {
  const emailRef = React.useRef<any>();
  const passwordRef = React.useRef<any>();

  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const { showFlashMessage } = useFlashMessage();
  const { login } = useAuthProvider();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to login!");
    }
    setLoading(false);
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <H1>Log in</H1>
      {error && showFlashMessage(error)}
      <Styled.Input placeholder="email" type="email" ref={emailRef} required />
      <Styled.Input
        placeholder="password"
        type="password"
        ref={passwordRef}
        required
      />
      <Button type="submit" disabled={loading}>
        Login
      </Button>
    </Styled.Form>
  );
};
