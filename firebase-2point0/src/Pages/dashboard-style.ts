import styled from "styled-components";
import { Color } from "../Components/color";
import { BorderRadius, Shadow } from "../Components/style-constants";

export const Styled = {
  Card: styled.div`
    border-radius: ${BorderRadius.normal};
    box-shadow: ${Shadow.shallow};
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  `,
  Button: styled.button`
    background: ${Color.Primary};
    border: none;
    width: 8rem;
    height: 4rem;
    border-radius: ${BorderRadius.normal};
  `,
};
