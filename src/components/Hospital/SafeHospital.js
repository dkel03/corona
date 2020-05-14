import React from 'react';

// material UI
import { Typography } from '@material-ui/core';
import Button from "@material-ui/core/Button";

// Styles
import "./css/hospital.css";

const SafeHospital = (props) => {
  const { sgguNm, sidoNm, yadmNm, telno } = props;

  return (
    <div className="safehospitalCard">
      <div className="itemDiv">
        <Typography variant="h5">{sidoNm}</Typography>
        <div className="sigunguDiv">
          <Typography variant="body1">{sgguNm}</Typography>
        </div>
      </div>
      <div className="itemDiv">
        <Typography variant="body1">{yadmNm}</Typography>
      </div>
      <div className="itemDiv">
        <Typography variant="body1">{telno}</Typography>
      </div>
      <Button className="mapButton" onClick={() => alert("준비중입니다...")}><span className="darkBrown">지도보기</span></Button>
    </div>
  )
}

export default SafeHospital;