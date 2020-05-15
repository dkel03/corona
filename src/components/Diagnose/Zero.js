import React from "react";
import Button from "@material-ui/core/Button";

const Zero = (props) => {
  const { setCardIndex } = props;
  return (
    <div>
      <div>접촉자이고 자가격리 통보를 받으셨나요?</div>
      <Button variant="contained" onClick={() => setCardIndex(1)}>Yes</Button>
      <Button variant="contained" onClick={() => setCardIndex(4)}>No</Button>
    </div>
  );
}

export default Zero;