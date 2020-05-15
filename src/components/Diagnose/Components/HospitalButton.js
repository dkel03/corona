import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

// Material UI
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

const HospitalButton = () => {
  return (
    <StyledLink to="/hospitalsearch">
      <Button
        size="medium"
        color="secondary"
        variant="contained"
        startIcon={<SearchIcon />}
      >선별진료소 검색
      </Button>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`

export default HospitalButton;