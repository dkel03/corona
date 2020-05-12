import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Button from "@material-ui/core/Button";

const Hospital = (props) => {
  const { sgguNm, sidoNm, yadmNm, telno } = props;

  return (
    <HospitalCard>
      <ItemBox>
        <SiDo>{sidoNm}</SiDo>
        <SiGunGu>{sgguNm}</SiGunGu>
      </ItemBox>
      <ItemBox>
        <Text>{yadmNm}</Text>
      </ItemBox>
      <ItemBox>
        <Text>{telno}</Text>
      </ItemBox>
      <MapButton><CT>지도보기</CT></MapButton>
    </HospitalCard>
  )
}

const HospitalCard = styled.div`
  margin: 10px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  padding: 10px;
  background-color: #bcaaa4;
  border-radius: 8px;
  color: white;
`

const ItemBox = styled.div`
  display: flex;
  margin: 8px;
  padding: 10px;
  min-width: 200px;
  background-color: white;
  border: 1px solid white;
  border-radius: 6px;
`
const SiDo = styled(Typography).attrs({
  variant: "h5",
})`
  color: #adaeb9
`
const SiGunGu = styled(Typography).attrs({
  variant: "body1",
})`
  margin-left: 8px;
  margin-top: 8px;
  color: #adaeb9
`
const Text = styled(Typography).attrs({
  variant: "body1",
})`
  color: #adaeb9
`
const MapButton = styled(Button)`
  margin-left: 5px;
`
const CT = styled.span`
  color: white;
`

export default Hospital;