import styled from "styled-components";
import { Container } from "styles/globals";

export const Wrapper = styled(Container)`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    margin-top: 20px;
  }
`;
