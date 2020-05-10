import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import Hospital from "./hospital";
import hooks from "../../hooks";

const HospitalPresenter = (props) => {
  const name = hooks.useInput("서울", (value) => value.length <= 10);

  return (
    <Fragment>
      <Card>
        <SearchHospitalInput {...name} />
        <InputExplain>
          시도 및 시군구, 전화번호를 통합하여 검색합니다.
        </InputExplain>
        <InputExplain>
          ex) '서울' 또는 '중구' 또는 '02'(전화번호 일부)
        </InputExplain>
      </Card>
      {props.hospitals.map((item, index) => {
        if(name.value && (item.sidoNm === name.value || item.sgguNm.includes(name.value) || item.telno.includes(name.value+'-'))) {
          return <Hospital key={index} {...item} />
        }
      })}
    </Fragment>
  );
};

const Card = styled.div`
  margin: 10px;
  padding: 10px;
  max-width: 300px;
  border: 1px solid;
`;
const SearchHospitalInput = styled.input.attrs({
  placeholder: "검색어를 입력하세요",
})`
  box-shadow: 0 0px 0px white;
  width: 200px;
  height: 30px;
  margin: 10px;
  font-size: 20px;
`;
const SearchButton = styled.button`
  font-size: 15px;
  display: inline-block;
  width: 100px;
  height: 30px;
  border-radius: 0.35em;
`

const InputExplain = styled.p`
  font-size: 12px;
  margin: 10px;
  align-item: center;
`;

export default HospitalPresenter;
