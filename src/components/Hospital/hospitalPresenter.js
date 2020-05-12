import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import hooks from "../../hooks";
import { Typography } from "@material-ui/core";
// components
import Loading from "../loading";
import Hospital from "./hospital";

const HospitalPresenter = (props) => {
  const { hospitals, loading } = props;
  const name = hooks.useInput("", (value) => value.length <= 10);
  return (
    <Fragment>
      <SearchCard>
        <SearchHospitalInput {...name} />
        <InputExplain>
          시군구, 전화번호를 통합하여 검색합니다.
        </InputExplain>
        <InputExplain>
          ex)'과천' 또는 '중구' 또는 '02'(전화번호 일부)
        </InputExplain>
      </SearchCard>
      {loading ? (
        <LoadingCard>
          <Loading />
        </LoadingCard>
      ) : (
        <Fragment />
      )}
      <HospitalListCard>
        {hospitals.map((item, index) => {
          if (
            name.value &&
            item.spclAdmTyCd === 99 &&
            ((name.value.length >= 2 && item.sgguNm.includes(name.value)) || 
            (name.value.length >= 2 && item.telno.includes(name.value + "-")))
          ) {
            return <Hospital key={index} {...item} />;
          }
          return;
        })}
      </HospitalListCard>
    </Fragment>
  );
};

const SearchCard = styled.div`
  margin: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  padding: 10px;
  background-color: #bcaaa4;
  border-radius: 8px;
  color: white;
  min-width: 300px;
`
const LoadingCard = styled.div`
  margin: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  box-shadow: none;
`;

const HospitalListCard = styled.div`
  margin: 20px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  justify-content: space-around;
  box-shadow: none;
`
const SearchHospitalInput = styled.input.attrs({
  placeholder: "검색어를 입력하세요...",
})`
  margin: 10px;
  padding: 10px;
  font-size: 20px;
  border-radius:0px 0px;
  -webkit-appearance:none;
  border: 1px solid #adaeb9;
`;

const InputExplain = styled(Typography).attrs({
  variant: "body2"
})`
  margin: 10px;
  align-item: center;
`;

export default HospitalPresenter;
