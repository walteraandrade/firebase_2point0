import React from "react";
import { Button } from "../Components/button-component";
import { useFlashMessage } from "../Components/flash-message/flash-message.provider";
import { H1 } from "../Components/typography";
import { useAuthProvider } from "../Context/auth.context";
import { Styled } from "./signup.page.style";

export const SignUp: React.FC = () => {
  const emailRef = React.useRef<any>();
  const passwordRef = React.useRef<any>();
  const passwordConfirmRef = React.useRef<any>();

  const [error, setError] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const { showFlashMessage } = useFlashMessage();
  const { signUp } = useAuthProvider();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account!");
    }
    setLoading(false);
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <H1>Sign up</H1>
      {error && showFlashMessage(error)}
      <Styled.Input placeholder="email" type="email" ref={emailRef} required />
      <Styled.Input
        placeholder="password"
        type="password"
        ref={passwordRef}
        required
      />
      <Styled.Input
        placeholder="password"
        type="password"
        ref={passwordConfirmRef}
      />
      <Button type="submit" disabled={loading}>
        Sign up
      </Button>
    </Styled.Form>
  );
};
