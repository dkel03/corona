import React from "react";
import Button from "@material-ui/core/Button";

const One = (props) => {
  const { setCardIndex } = props;
  return (
    <div>
      <div>증상이 있으신가요?</div>
      <Button variant="contained" onClick={() => setCardIndex(2)}>Yes</Button>
      <Button variant="contained" onClick={() => setCardIndex(3)}>No</Button>
    </div>
  );
}

export default One;