import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from "@material-ui/core";

const Loading = () => {
  return (
    <Fragment>
      <CircularProgress color="secondary"/>
      <LoadingItem>
        <Typography>Loading ...</Typography>
      </LoadingItem>
    </Fragment>
  );
}

const LoadingItem = styled.div`
  margin-left: 10px;
  margin-top: 7px;
  color: #95a5a6;
`

export default Loading;