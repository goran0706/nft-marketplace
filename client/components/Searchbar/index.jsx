import styled from "@emotion/styled";
import { Input } from "antd";
import { gray5, grayGlass } from "../../styles/colors";

const { Search } = Input;

const StyledSearch = styled(Search)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${grayGlass};
  border: none;
  border-radius: 12px;
  height: 36px;
  width: 480px;

  & * {
    background: transparent;
    border: none;
    box-shadow: none;
    color: ${gray5} !important;
    outline: none;
  }

  & ::placeholder {
    color: ${gray5} !important;
  }
`;

const onSearch = () => console.log("onSearch");

const Searchbar = () => {
  return (
    <StyledSearch
      allowClear
      placeholder="Search items, collections and authors"
      onSearch={onSearch}
    />
  );
};

export default Searchbar;
