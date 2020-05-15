import React from "react";
import Button from "@material-ui/core/Button";

const Two = (props) => {
  const { setCardIndex } = props;
  return (
    <div>
      <div>마스크 꼭 착용하시고, 본인거주지의 선별진료소에 방문, 검사를 받으셔야 합니다!!</div>
      <Button variant="contained" onClick={() => setCardIndex(0)}>다시 진단하기</Button>
      <Button variant="contained">선별진료소 검색</Button>
    </div>
  );
}

export default Two;