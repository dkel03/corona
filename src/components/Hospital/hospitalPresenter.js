import React from "react";
import { Fragment, useState } from "react";
import hooks from "../../hooks";

import { Typography } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from "@material-ui/core/Checkbox";

// styles
import "./css/presenter.css"

// components
import Loading from "../loading";
import Hospital from "./Hospital";

const HospitalPresenter = (props) => {
  const { hospitals, loading } = props;
  const [checked, setChecked] = useState(false);
  const name = hooks.useInput("", (value) => value.length <= 10);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
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
        <div className="bogunsoDiv">
          <FormControlLabel
            control={
              <Checkbox color="primary" name="checkedA" checked={checked} onChange={(event) => handleChange(event)} />
            }
            label="보건소를 제외할까요?"
          />
          <Typography variant="body1"><span className="impact">(보건소는 유료검사가 불가능합니다.)</span></Typography>
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
            item.spclAdmTyCd === 99) && (checked ? (!item.yadmNm.includes("보건소")):(true) ) &&
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

export default HospitalPresenter;
