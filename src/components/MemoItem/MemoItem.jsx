/* eslint-disable react/prop-types */
import { getHoursAndMinutes } from "../../utils";
import { StDiv } from "./MemoItem.styled";

const MemoItem = ({ body, time }) => {
  return (
    <StDiv>
      <h2>{body}</h2>
      <p>{getHoursAndMinutes(time)}</p>
    </StDiv>
  );
};

export { MemoItem };
