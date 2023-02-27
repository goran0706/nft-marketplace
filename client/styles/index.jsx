import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Button,
  List,
  Space,
  Typography,
  Divider,
  Tabs,
  Form,
  Card as AntCard,
} from "antd";
import {
  base,
  danger,
  gray1,
  gray4,
  gray5,
  grayGlass,
  green,
  text,
} from "./colors";

const { Title, Text: AntText } = Typography;

export const CarouselWrapper = styled.div`
  display: block;
  max-width: 1279px;
  margin: auto;

  .ant-carousel .slick-dots-bottom {
    bottom: -32px !important;
  }

  .ant-carousel .slick-prev,
  .ant-carousel .slick-next,
  .ant-carousel .slick-prev:hover,
  .ant-carousel .slick-next:hover,
  .ant-carousel .slick-prev:focus,
  .ant-carousel .slick-next:focus {
    color: ${text};
    background: ${grayGlass};
    z-index: 1;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;

    svg {
      padding: 6px;
      width: 100%;
      height: 100%;
    }
  }

  .ant-carousel .slick-prev {
    inset-inline-start: -80px;
  }

  .ant-carousel .slick-next {
    inset-inline-end: -80px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0px 160px;
  margin-bottom: 120px;
`;

export const SectionTitle = styled(Title)`
  color: ${text} !important;
  align-self: flex-start;
`;

export const SectionContent = styled(Space)`
  justify-content: center;
`;

export const SectionButton = styled(Button)`
  color: white;
  background-color: transparent;
`;

export const StyledList = styled(List)`
  .ant-row {
    justify-content: space-between;
  }
`;

export const StyledTabs = styled(Tabs)`
  width: 100%;
  color: ${text};

  .ant-tabs-tab {
    background-color: ${gray1} !important;
  }

  .ant-tabs-tab-active {
    background-color: rgba(219, 219, 219, 0.15) !important;
  }

  .ant-tabs-nav {
    margin-bottom: 48px !important;
  }
`;

export const StyledDivider = styled(Divider)`
  &.ant-divider-horizontal,
  &.ant-divider-vertical {
    background-color: ${gray4};
  }
`;

export const Card = styled(AntCard)`
  width: ${({ width }) => width ?? "380px"};
  overflow: hidden;
  border: none;
  color: ${text};
  background-color: ${base};

  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;

  ${({ hoverable }) =>
    hoverable &&
    css`
      :hover {
        transform: translateY(-6px);
        -webkit-transform: translateY(-6px);
        -moz-transform: translateY(-6px);
        -ms-transform: translateY(-6px);
        -o-transform: translateY(-6px);
      }
    `}

  img {
    /* max-height: 240px; */
  }

  .ant-avatar {
    width: 50px !important;
    height: 50px !important;
  }

  .ant-card-meta {
    flex: 1;
    align-items: center;
  }

  .ant-card-meta-title {
    color: ${text};
    margin: 0 !important;
  }

  .ant-card-meta-description,
  .ant-statistic .ant-statistic-content {
    color: ${gray5};
  }
`;

export const StyledForm = styled(Form)`
  padding: 32px;
  max-width: 600px;
  background-color: ${gray1};
  border-radius: 16px;
  box-shadow: 10px 4px 100px rgba(0, 0, 0, 0.5);

  * {
    border: none !important;
  }

  h3,
  label,
  input,
  textarea,
  svg,
  .ant-select-selector {
    color: ${text} !important;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${gray4} !important;
  }

  input,
  textarea,
  .ant-upload,
  .ant-select-selector {
    background-color: ${base} !important;
  }

  .ant-upload {
    width: 240px !important;
    height: 240px !important;
    border-radius: 16px;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? "row"};
  align-items: center;
  justify-content: ${({ justify }) => justify};
  gap: 16px;
  width: 100%;
`;

const StyledText = styled(AntText)`
  color: ${({ color }) => color};
`;

export const Text = {
  White: (props) => <StyledText color={text} {...props} />,
  Black: (props) => <StyledText color={base} {...props} />,
  Grey: (props) => <StyledText color={gray4} {...props} />,
  Green: (props) => <StyledText color={green} {...props} />,
  Danger: (props) => <StyledText color={danger} {...props} />,
};
