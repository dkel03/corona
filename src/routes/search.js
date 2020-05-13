import React from "react";
import HospitalContainer from "../Components/Hospital/hospitalContainer"

// Page 관련
import "../Components/Page/page.css";
import PageTitle from "../Components/Page/PageTitle";
import PageSubtitle from "../Components/Page/PageSubtitle";

const Search = () => {
  return (
    <div className="container">
      <PageTitle title="선별진료소 검색"></PageTitle>
      <PageSubtitle subtitle="Triage Room Searching"></PageSubtitle>
      <HospitalContainer />
    </div>
  );
}

export default Search;
