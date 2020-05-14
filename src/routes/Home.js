import React from "react";

// Page 관련
import "../Components/Page/page.css";
import PageTitle from "../Components/Page/PageTitle";
import PageSubtitle from "../Components/Page/PageSubtitle";

// Home 관련
import "../Components/Home/home.css";
import Menu from "../Components/Home/Menu";

function Coronacare() {
  return (
    <div className="container">
      <div className="alignDiv">
        <div className="titleDiv">
          <PageTitle title="한눈에 코로나 케어"></PageTitle>
          <PageSubtitle subtitle="우리 코로나 케어해요!!"></PageSubtitle>
        </div>
      </div>
      <div className="menuCard">
        <Menu to="coronacare" name="코로나케어란?" icon="1"/>
        <Menu to="diagnose" name="자가진단" icon="2"/>
        <Menu to="hospitalsearch" name="선별진료소 검색" icon = "3"/>
        <Menu to="safehospitalsearch" name="안심병원 검색" icon = "4"/>
      </div>
    </div>
  );
}

export default Coronacare;
