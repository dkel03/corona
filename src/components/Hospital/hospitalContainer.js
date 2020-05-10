import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import HospitalPresenter from "./hospitalPresenter";

const hospitalDataOptions = {
  serviceKey:
    "pWxaXap%2FwKbLIZRUF%2BU%2Ff6665dXH4T%2Bf%2BknFO1vInhK1WDpcL1CVgbthsPoVCAKKTWHuuFrx4oEDagFOMWMyAg%3D%3D",
  pageNo: 1,
  numOfRows: 10000,
  spclAdmTyCd: "99",
};

const sortHospitals = (hospitals) => {  //시 또는 도 별 정렬
  if (!hospitals || !Array.isArray(hospitals)) {
    return;
  }
  const compare = (a, b) => {
    return a.sidoNm < b.sidoNm
      ? -1
      : a.sidoNm > b.sidoNm
      ? 1
      : a.sgguNm < b.sgguNm
      ? -1
      : a.sgguNm > b.sgguNm
      ? 1
      : 0;
  };
  return hospitals.sort(compare);
};

const HospitalContainer = () => {
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    const hospitalDataUrl = `http://apis.data.go.kr/B551182/pubReliefHospService/getpubReliefHospList?serviceKey=${hospitalDataOptions.serviceKey}&pageNo=${hospitalDataOptions.pageNo}&numOfRows=${hospitalDataOptions.numOfRows}&spclAdmTyCd=${hospitalDataOptions.spclAdmTyCd}&`;
    axios
      .get(hospitalDataUrl)
      .then((response) => {
        const {
          data: {
            response: {
              body: {
                items: { item },
              },
            },
          },
        } = response;
        sortHospitals(item);
        setHospitals(item);
      })
      .catch((e) => console.log(e));
  }, []);

  return (<HospitalPresenter hospitals={hospitals}/>);
};

export default HospitalContainer;
