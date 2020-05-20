import React from "react";

// Page 관련
import "../Components/Page/page.css";
import PageTitleComponent from "../Components/Page/PageTitleComponent";

// Home 관련
import "../Components/Home/home.css";
import Menu from "../Components/Home/Menu";

function Home() {
  return (
    <div className="container">
      <PageTitleComponent title="한눈에 코로나케어" subtitle="Corona-Care Home" page="home" />
      <div className="menuCard">
        <Menu to="coronacare" name="코로나케어란?" icon="1"/>
        <Menu to="diagnose" name="자가진단" icon="2"/>
        <Menu to="hospitalsearch" name="선별진료소 검색" icon = "3"/>
        <Menu to="safehospitalsearch" name="안심병원 검색" icon = "4"/>
      </div>
    </div>
  );
}

export default Home;
