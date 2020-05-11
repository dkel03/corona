import React from 'react';
import styled from 'styled-components';

const Hospital = (props) => {
  const { sgguNm, sidoNm, yadmNm, telno } = props;

  return (
    <HospitalCard>
      <ItemBox>
        <SiDo>{sidoNm}</SiDo>
        <SiGunGu>{sgguNm}</SiGunGu>
      </ItemBox>
      <ItemBox>
        <Name>{yadmNm}</Name>
      </ItemBox>
      <ItemBox>
        <Telno>{telno}</Telno>
      </ItemBox>
    </HospitalCard>
  )
}

const HospitalCard = styled.div`
  margin: 10px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  border-radius: 5px;
  min-width: 250px;
`
const ItemBox = styled.div`
  margin: 8px;
  padding: 5px;
  background-color: white;
  border: 1px solid white;
  border-radius: 5px;
`
const SiDo = styled.span`
  font-size: 20px;
  margin-right: 5px;
  color: #adaeb9
`
const SiGunGu = styled.span`
  font-size: 15px;
  color: #adaeb9
`
const Name = styled.span`
  font-size: 15px;
`
const Telno = styled.div`
  font-size: 15px;
  color: #adaeb9
`

export default Hospital;