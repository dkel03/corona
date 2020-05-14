import React from "react";
import { Fragment } from "react";
import hooks from "../../hooks";
import { Typography } from "@material-ui/core";

// styles
import "./css/presenter.css"

// components
import Loading from "../loading";
import Hospital from "./Hospital";

const SafeHospitalPresenter = (props) => {
  const { hospitals, loading } = props;
  const name = hooks.useInput("", (value) => value.length <= 10);
  return (
    <Fragment>
        <div className="searchCard">
          <div className="inputDiv">
            <input className="searchHospitalInput" placeholder="검색어를 입력하세요..." {...name} />
          </div>
          <div className="explainDiv">
            <Typography variant="body1">시군구, 전화번호를 통합하여 검색합니다.</Typography>
            <br />
            <Typography variant="body1">ex)'용인시' or '강남구' or '02'(지역번호)</Typography>
          </div>
          <div className="safeHospitalDiv">
            <Typography variant="h6" > Q. 안심병원이란?</Typography>
            <br />
            <Typography variant="body2">- 국가에서 선정한 <span className="impact">"코로나 걱정없는 병원"</span></Typography>
            <br />
            <Typography variant="body2">- 진료가 필요할 땐 꼭 <span className="impact">안심병원</span>을 찾으세요!</Typography>
          </div>
        </div>
      {loading ? (
        <div className="loadingDiv">
          <Loading />
        </div>
      ) : (
        <Fragment />
      )}
      <div className="hospitalListDiv">
        {hospitals.map((item, index) => {
          if (
            (name.value &&
            item.spclAdmTyCd === "A0") &&
            ((name.value.length >= 2 && item.sgguNm.includes(name.value)) || 
            (name.value.length >= 2 && item.telno.includes(name.value + "-")))
          ) {
            return <Hospital key={index} {...item} />;
          }
          return;
        })}
      </div>
    </Fragment>
  );
};

export default SafeHospitalPresenter;
