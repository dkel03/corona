import React from 'react';
import { useState } from 'react';

// material UI
import { Typography } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

// Styles
import "./css/hospital.css";
import KakaoMap from "../KakaoMap/KakaoMap"

const Hospital = (props) => {
  const { sgguNm, sidoNm, yadmNm, telno } = props;
  const telnumber = "tel:"+telno;
  const [open, setOpen] = useState(false);
  const keyword = `${sidoNm} ${sgguNm} ${yadmNm}`;
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
        <Typography variant="body1"><a href={telnumber} style={{color:"black"}}>{telno}</a></Typography>
      </div>
      <div className="rightAlignDiv">
        <Button size="small" variant="outlined" color="secondary" className="mapButton" onClick={() => setOpen(true)}>지도보기</Button>
      </div>
      <Dialog onClose={() => setOpen(false)} aria-labelledby="simple-dialog-title" open={open}>
        <div className="dialogDiv">
          <DialogTitle >카카오 지도로 보기</DialogTitle>
          <Button size="large" onClick={() => setOpen(false)}>X</Button>
        </div>
        {yadmNm === "학교법인 고려중앙학원 고려대학교의과대학부속병원(안암병원)" || yadmNm === "학교법인연세대학교의과대학세브란스병원" ? <div className="zidoupdate">지도 업데이트 중입니다...</div> : <KakaoMap keyword={keyword}/>}
      </Dialog>
    </div>
  )
}

export default Hospital;