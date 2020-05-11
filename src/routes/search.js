import React from "react";
import styled from "styled-components";
import HospitalContainer from "../Components/Hospital/hospitalContainer"

const Search = () => {
  return (
    <SearchContainer>
      <HospitalContainer />
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
  0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  margin: 0 auto;
  margin-top: 20px;
  max-width: 1000px;
` 

export default Search;