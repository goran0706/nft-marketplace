"use client";
import { colors } from "../../theme";
import styled from "@emotion/styled";

const StyledSelect = styled.select`
  appearance: auto;
  background: ${colors.bg1};
  border-radius: 6px;
  border: none;
  color: ${colors.text4};
  font-size: 14px;
  font-weight: 500;
  outline: none;
  padding: 16px;
  transition: 0.5s;
  width: 100%;
  -moz-appearance: auto;
  -webkit-appearance: auto;
  -webkit-transition: 0.5s;
  &:focus {
    outline: none;
  }
`;

const StyledOption = styled.option``;

const Select = ({ options = [], defaultValue, onChange, ...props }) => {
  return (
    <StyledSelect value={defaultValue} onChange={onChange} {...props}>
      {options.map(({ value, label }) => (
        <StyledOption key={value} value={value}>
          {label}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

export default Select;
