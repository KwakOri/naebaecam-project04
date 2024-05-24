import { useSelector } from "react-redux";
import { MemoItem } from "../MemoItem";
import { StDiv } from "./MemoList.styled";

const MemoList = () => {
  const { memoList } = useSelector((state) => state.memo);
  console.log(memoList);

  return (
    <StDiv>
      {memoList.map((item) => (
        <li key={item._id}>
          <MemoItem body={item.content} time={item.date} />
        </li>
      ))}
    </StDiv>
  );
};

export { MemoList };
