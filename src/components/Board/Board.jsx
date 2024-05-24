import { Buttons } from "../Buttons";
import { StDiv, StLeftDiv } from "./Board.styled";

const Board = () => {
  return (
    <StDiv>
      <StLeftDiv>
        <Buttons></Buttons>
      </StLeftDiv>
    </StDiv>
  );
};

export { Board };
