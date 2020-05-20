import React from "react";
import SafeHospitalContainer from "../Components/Hospital/SafeHospitalContainer"

// Page 관련
import "../Components/Page/page.css";
import PageTitleComponent from "../Components/Page/PageTitleComponent";

const SafeHospitalSearch = () => {
  return (
    <div className="containerFixed">
      <div className="alignCenterDiv">
        <PageTitleComponent title="안심병원 검색" subtitle="Safe Hospital Searching" page="safehospitalsearch" />
        <SafeHospitalContainer />
      </div>
    </div>
  );
}

export default SafeHospitalSearch;
