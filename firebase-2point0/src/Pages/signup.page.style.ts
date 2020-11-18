import styled from "styled-components";
import { BorderRadius, Spacing } from "../Components/style-constants";

export const Styled = {
  Input: styled.input``,
  Form: styled.form`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    max-width: 400px;
    border: 2px solid black;
    padding: ${Spacing.Small};
    border-radius: ${BorderRadius.normal};
  `,
  HomePageWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
};
