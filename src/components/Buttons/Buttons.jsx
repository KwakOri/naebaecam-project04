import { StDiv } from "./Buttons.styled";

const Buttons = () => {
  return (
    <StDiv>
      <button
        onClick={() => {
          console.log("new!");
        }}
      >
        새 메모 작성하기
      </button>
      <button
        onClick={() => {
          console.log("delete!");
        }}
      >
        삭제
      </button>
    </StDiv>
  );
};

export { Buttons };
