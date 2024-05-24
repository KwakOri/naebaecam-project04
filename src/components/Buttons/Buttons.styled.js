import styled from "styled-components";

const StDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  background-color: aqua;
  height: 48px;
  width: 240px;

  & button {
    font-weight: 500;
    color: #808080;
    font-size: 13px;
    background-color: transparent;
    border: none;
  }
`;

export { StDiv };
