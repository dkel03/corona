import React from "react";

// Page 관련
import "../Components/Page/page.css";
import PageTitle from "../Components/Page/PageTitle";
import PageSubtitle from "../Components/Page/PageSubtitle";

function Diagnose() {
  return (
    <div className="container">
      <PageTitle title="자가진단"></PageTitle>
      <PageSubtitle subtitle="Self Diagnose"></PageSubtitle>
      준비중...
    </div>
  );
}

export default Diagnose;
