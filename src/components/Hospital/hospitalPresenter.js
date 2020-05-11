import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import hooks from "../../hooks";
// components
import Loading from "../loading";
import Hospital from "./hospital";

const HospitalPresenter = (props) => {
  const { hospitals, loading } = props;
  const name = hooks.useInput("서울", (value) => value.length <= 10);
  return (
    <Fragment>
      <SearchCard>
        <SearchTitle>선별진료소 검색하기</SearchTitle>
        <SearchHospitalInput {...name} />
        <InputExplain>
          시도 및 시군구, 전화번호를 통합하여 검색합니다.
        </InputExplain>
        <InputExplain>
          ex) '서울' 또는 '중구' 또는 '02'(전화번호 일부)
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
            (item.sidoNm === name.value ||
              item.sgguNm.includes(name.value) ||
              item.telno.includes(name.value + "-"))
          ) {
            return <Hospital key={index} {...item} />;
          }
          return;
        })}
      </HospitalListCard>
    </Fragment>
  );
};

const Card = styled.div`
  width: 100%;
  margin: 20px;
  padding: 10px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;
const SearchCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(50, 50, 93, 0.25);
  max-width: 800px;
`
const LoadingCard = styled(Card)`
  display: flex;
  justify-content: center;
  box-shadow: none;
`;
const HospitalListCard = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  justify-content: space-around;
  box-shadow: none;
`
const SearchTitle = styled.h1`

`

const SearchHospitalInput = styled.input.attrs({
  placeholder: "검색어를 입력하세요...",
})`
  min-width: 300px;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
  border-radius:0px 0px;
  -webkit-appearance:none;
  border: 1px solid #adaeb9;
`;

const InputExplain = styled.p`
  font-size: 12px;
  margin: 10px;
  align-item: center;
`;

export default HospitalPresenter;
