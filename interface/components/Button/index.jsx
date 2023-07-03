"use client";
import { colors } from "../../theme";
import { css } from "@emotion/react";
import { Text } from "../styled";
import Link from "next/link";
import Spinner from "../Spinner";
import styled from "@emotion/styled";

export const ButtonGroup = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-start;
`;

export const BaseButton = ({
  block,
  outline,
  outlinecolor,
  ghost,
  compact,
  fontSize,
}) =>
  css`
    align-items: center;
    background-color: ${ghost ? "transparent" : colors.blue1};
    border-color: ${ghost ? "none" : colors.blue1};
    border-radius: 6px;
    border: ${outline &&
    `1px solid ${outlinecolor ? outlinecolor : colors.white}`};
    color: ${colors.text1};
    cursor: pointer;
    display: flex;
    font-size: ${fontSize ? fontSize : "1rem"};
    font-weight: 700;
    gap: 8px;
    justify-content: center;
    line-height: 1;
    outline: 0 none;
    padding: ${compact ? "8px 16px" : "16px 32px"};
    text-align: center;
    transition: all 0.3s ease-in-out;
    height: ${compact ? "auto" : "48px"};
    width: ${block ? "100%" : "fit-content"};

    p {
      font-size: ${fontSize ? fontSize : "1rem"};
      transition: all 0.3s ease-in-out;
    }

    :hover {
      p {
        color: ${compact ? colors.blue1 : colors.text1};
      }
      color: ${compact ? colors.blue1 : colors.text1};
      border: ${outline ? "1px solid" : "none"};
      border-color: ${ghost ? colors.blue1 : colors.text1};
      background-color: ${compact
        ? "transparent"
        : ghost
        ? colors.blue1
        : colors.blue2};
    }

    :disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  `;

const StyledLink = styled(Link)`
  ${BaseButton}
`;

const StyledButton = styled.button`
  ${BaseButton}
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ButtonComponent = ({ as, ...props }) => {
  return as === "link" ? (
    <StyledLink {...props} />
  ) : (
    <StyledButton {...props} />
  );
};

const ButtonIcon = ({ loading, Icon }) => {
  return !loading && Icon ? Icon : null;
};

const ButtonLoader = ({ loading }) => {
  return loading ? <Spinner /> : null;
};

const ButtonText = ({ loading, label }) => {
  return !loading && label ? <Text>{label}</Text> : null;
};

export const Button = ({ as, loading, Icon, label, ...props }) => {
  return (
    <ButtonComponent as={as} {...props}>
      <ButtonLoader loading={loading} />
      <ButtonIcon loading={loading} Icon={Icon} />
      <ButtonText loading={loading} label={label} />
    </ButtonComponent>
  );
};
