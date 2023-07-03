"use client";
import { colors } from "../../theme";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import styled from "@emotion/styled";

const SearchFrame = styled.div`
  margin-left: 35px;
  padding-left: 35px;
  position: relative;
  width: 300px;
  &::before {
    content: "";
    background: ${colors.purple1};
    border-radius: 6px;
    height: 31px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
  }
`;

const SearchForm = styled.form`
  border-radius: 6px;
  border: 2px dashed ${colors.purple1};
  position: relative;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  color: ${colors.text4};
  font-size: 14px;
  left: 16px;
  line-height: 1;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const SearchInput = styled.input`
  background: ${colors.bg1};
  border-radius: 6px;
  border: 1px dashed ${colors.purple1};
  border: none;
  color: ${colors.text2};
  font-size: 14px;
  height: 47px;
  padding: 13px 20px 13px 40px;
  width: 100%;
`;

const Search = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSearchSubmit(term);
    setTerm("");
  };

  const changeHandler = (e) => {
    setTerm(e.target.value);
  };

  return (
    <SearchFrame>
      <SearchForm onSubmit={submitHandler}>
        <SearchButton>
          <FaSearch />
        </SearchButton>
        <SearchInput
          type="text"
          placeholder="Search arts"
          value={term}
          onChange={changeHandler}
        />
      </SearchForm>
    </SearchFrame>
  );
};

export default Search;
