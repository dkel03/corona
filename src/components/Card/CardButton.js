import React from "react";
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";

const CardButton = (props) => {
  const { setCardIndex, text, cardIndex } = props;
  return (
    <StyledButton onClick={() => setCardIndex(cardIndex)}>
      <Typography variant="body2">{text}</Typography>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background-color: white;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  border: none;
  border-radius: 4px;
  padding: 3px;
  color: #grey;
`

export default CardButton;