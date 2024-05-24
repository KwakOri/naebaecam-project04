import { StDiv } from "./MemoItem.styled";

const MemoItem = ({ body, time }) => {
  return (
    <StDiv>
      <h2>{body}</h2>
      <p>{time}</p>
    </StDiv>
  );
};

export { MemoItem };
