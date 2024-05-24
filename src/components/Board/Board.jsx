import { Buttons } from "../Buttons";
import { MemoList } from "../MemoList";
import { StDiv, StLeftDiv } from "./Board.styled";

const Board = () => {
  return (
    <StDiv>
      <StLeftDiv>
        <Buttons></Buttons>
        <MemoList></MemoList>
      </StLeftDiv>
    </StDiv>
  );
};

export { Board };
