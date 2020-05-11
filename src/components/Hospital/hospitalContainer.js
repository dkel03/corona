import React from "react";
import { Fragment, useState, useEffect } from "react";
import axios from 'axios';
import HospitalPresenter from "./hospitalPresenter";

const HospitalContainer = () => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://corona-back.herokuapp.com/api/")
      .then(res => {
        setHospitals(res.data);
        setLoading(false);
      })
    .catch((e) => console.log(e));
  }, []);

  return (
    <Fragment>
      <HospitalPresenter loading={loading} hospitals={hospitals}/>
    </Fragment>
  );
};

export default HospitalContainer;
