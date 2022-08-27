import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PlayContainer = styled.div`
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TimeContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 1.2rem;
  input {
    width: 100%;
  }
  p {
    padding: 1rem;
  }
`;

export const IconPlay = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

export const ControlContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`;

export const ContDescription = styled.div`
  padding: 2rem;
`;
