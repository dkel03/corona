import React from 'react';

// material UI
import { Typography } from '@material-ui/core';
import Button from "@material-ui/core/Button";

// Styles
import "./css/hospital.css";

const Hospital = (props) => {
  const { sgguNm, sidoNm, yadmNm, telno } = props;

  return (
    <div className="hospitalCard">
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
      <div className="rightAlignDiv">
        <Button variant="outlined" className="mapButton" onClick={() => alert("준비중입니다...")}><span className="white">지도보기</span></Button>
      </div>
    </div>
  )
}

export default Hospital;