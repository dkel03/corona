import React from "react";
import styled from "styled-components";
import HospitalContainer from "../Components/Hospital/HospitalContainer"

// Page 관련
import "../Components/Page/page.css";
import PageTitle from "../Components/Page/PageTitle";
import PageSubtitle from "../Components/Page/PageSubtitle";

import SearchIcon from '@material-ui/icons/Search';

const HospitalSearch = () => {
  return (
    <div className="containerFixed">
      <div className="searchTitleDiv">
        <div className="searchTitleDivIcon">
          <StyledSearchIcon />
        </div>
        <div className="searchTitleDivTitle">
          <PageTitle title="선별진료소 검색"></PageTitle>
          <PageSubtitle subtitle="Triage Room Searching"></PageSubtitle>
        </div>
      </div>
      <HospitalContainer />
    </div>
  );
}

const StyledSearchIcon = styled(SearchIcon)`
  width: 60px;
  height: 60px;
  color: #bcaaa4;
`

export default HospitalSearch;
