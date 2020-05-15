import React from "react";
import Button from "@material-ui/core/Button";

const Three = (props) => {
  const { setCardIndex } = props;
  return (
    <div>
      <div>자가격리 꼭 지켜주시고 증상이 없더라도 검사가 가능하니 본인 거주지의 선별진료소를 방문해주세요!</div>
      <Button variant="contained" onClick={() => setCardIndex(0)}>다시 진단하기</Button>
      <Button variant="contained">선별진료소 검색</Button>
    </div>
  );
}

export default Three;