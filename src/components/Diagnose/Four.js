import React from "react";
import Button from "@material-ui/core/Button";

const Four = (props) => {
  const { setCardIndex } = props;
  return (
    <div>
      <div>44</div>
      <Button variant="contained" onClick={() => setCardIndex(1)}>Yes</Button>
      <Button variant="contained" onClick={() => setCardIndex(4)}>No</Button>
    </div>
  );
}

export default Four;