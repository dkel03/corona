import React from "react";
import styled from "styled-components";
import SafeHospitalContainer from "../Components/Hospital/SafeHospitalContainer"

// Page 관련
import "../Components/Page/page.css";
import PageTitle from "../Components/Page/PageTitle";
import PageSubtitle from "../Components/Page/PageSubtitle";

// Icon 관련

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const SafeHospitalSearch = () => {
  return (
    <div className="containerFixed">
      <div className="searchTitleDiv">
        <div className="searchTitleDivIcon">
          <StyledLocalHospitalIcon />
        </div>
        <div className="searchTitleDivTitle">
          <PageTitle title="안심병원 검색"></PageTitle>
          <PageSubtitle subtitle="Safe Hospital Searching"></PageSubtitle>
        </div>
      </div>
      <SafeHospitalContainer />
    </div>
  );
}

const StyledLocalHospitalIcon = styled(LocalHospitalIcon)`
  width: 70px;
  height: 70px;
  color: #bcaaa4;
`

export default SafeHospitalSearch;
