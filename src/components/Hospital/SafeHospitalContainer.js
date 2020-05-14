import React from "react";
import { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import SafeHospitalPresenter from "./SafeHospitalPresenter";

const SafeHospitalContainer = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://corona-back.herokuapp.com/api/safehospital")
      .then(res => {
        setHospitals(res.data);
        setLoading(false);
      })
    .catch((e) => console.log(e));
  }, []);

  return (
    <Fragment>
      <SafeHospitalPresenter loading={loading} hospitals={hospitals}/>
    </Fragment>
  );
};

export default SafeHospitalContainer;
