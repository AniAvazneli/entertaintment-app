import styled from "styled-components";
import Loop from "../assets/Loop.png";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <SearchD>
      <SvgDiv src={Loop} alt="" />
      <Input
        placeholder="Search for movies or TV series"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
    </SearchD>
  );
};
export default Search;

const SearchD = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
  margin-left: 16px;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  mix-blend-mode: normal;
  @media screen and (min-width: 768px) {
    height: 32px;
    margin-left: 25px;
    font-size: 24px;
    line-height: 30px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 65px;
    margin-bottom: 35px;
  }
`;

const Input = styled.input`
  height: 20px;
  width: 321px;
  background: #10141e;
  border: 0px;
  font-size: 16px;
  line-height: 20px;
  margin-left: 16px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.9;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 30px;
  }
  @media screen and (min-width: 1440px){
    margin-left: 24px;
  }
`;
const SvgDiv = styled.img`
  height: 18.00579833984375px;
  width: 18.00579833984375px;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
