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
  background-color: #2ecc71;
  border: 1px solid #2ecc71;
  border-radius: 5px;
  max-width: 300px;
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
  color: #95a5a6
`
const SiGunGu = styled.span`
  font-size: 15px;
  color: #95a5a6
`
const Name = styled.span`
  font-size: 15px;
  color: #95a5a6
`
const Telno = styled.div`
  font-size: 15px;
  color: #95a5a6
`

export default Hospital;