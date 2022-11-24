import styled from "styled-components";
import Loop from "../assets/Loop.png";

const Search = ({searchTerm, setSearchTerm }) => {
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
  justify-content: center;
  width: 257px;
  height: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
  margin-left: 16px;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const Input = styled.input`
  height: 20px;
  width: 214px;
  background: #10141e;
  border: 0px;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  margin-left: 16px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
  :focus{
    border: 0px;
  }
`;
const SvgDiv = styled.img`
  height: 18.00579833984375px;
  width: 18.00579833984375px;
`;
