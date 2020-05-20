import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components"

const TodayComfirmer = () => {
  const [confirmer, setConfirmer] = useState([]);
  useEffect(() => {
    axios.get("https://livecorona.co.kr/data/koreaRegionalCumulativeData.js")
      .then(res => {
        console.log(res.data);
      })
    .catch((e) => console.log(e));
  }, []);
  return (
    <div>asdf</div>
  )
}

export default TodayComfirmer;