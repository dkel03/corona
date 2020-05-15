import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

// Material UI
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

const SafeHospitalButton = () => {
  return (
    <StyledLink to="/safehospitalsearch">
      <Button
        size="medium"
        color="secondary"
        variant="contained"
        startIcon={<SearchIcon />}
      >안심병원 검색
      </Button>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`

export default SafeHospitalButton;