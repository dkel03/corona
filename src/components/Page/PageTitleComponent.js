import React from "react";
import styled from "styled-components";

// pages
import "./page.css";
import PageTitle from "./PageTitle";
import PageSubtitle from "./PageSubtitle";

// Icons
import { faUserMd } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AssignmentIcon from '@material-ui/icons/Assignment';
import SearchIcon from '@material-ui/icons/Search';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const PageTitleComponent = (props) => {
  const { page, title, subtitle } = props;
  return (
    <div className="titleDiv">
      <div>
        { page === "home" ? <StyledHomeIcon icon={faUserMd} size="4x"/> : (
            page === "diagnose" ? <StyledAssignmentIcon /> : (
              page === "hospitalsearch" ? <StyledSearchIcon /> : <StyledLocalHospitalIcon/>
            )
          )
        }
      </div>
      <div>
        <PageTitle title={title}></PageTitle>
        <PageSubtitle subtitle={subtitle}></PageSubtitle>
      </div>
  </div>
  )
}
const StyledHomeIcon = styled(FontAwesomeIcon)`
  color: #232323;
  margin-bottom: 6px;
  margin-right: 5px;
`

const StyledAssignmentIcon = styled(AssignmentIcon)`
  width: 50px;
  height: 50px;
  color: #625b5b;
`
const StyledSearchIcon = styled(SearchIcon)`
  width: 60px;
  height: 60px;
  color: #625b5b;
`
const StyledLocalHospitalIcon = styled(LocalHospitalIcon)`
  width: 70px;
  height: 70px;
  color: #625b5b;
`

export default PageTitleComponent;