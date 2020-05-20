import React from "react";
import HospitalContainer from "../Components/Hospital/HospitalContainer"

// Page 관련
import "../Components/Page/page.css";
import PageTitleComponent from "../Components/Page/PageTitleComponent";

const HospitalSearch = () => {
  return (
    <div className="containerFixed">
      <div className="alignCenterDiv">
        <PageTitleComponent title="선별진료소 검색" subtitle="Triage Room Searching" page="hospitalsearch" />
        <HospitalContainer />
      </div>
    </div>
  );
}

export default HospitalSearch;
