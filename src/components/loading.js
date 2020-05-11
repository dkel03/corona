import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingItem>
      Loading ...
    </LoadingItem>);
}

const LoadingItem = styled.div`
  width: 80px;
  height: 20px;
  color: #95a5a6;
`

export default Loading;