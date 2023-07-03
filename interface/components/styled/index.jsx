import { colors } from "@/theme";
import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(${({ columns }) => columns ?? 1}, 1fr);
  grid-template-rows: auto;
`;

export const Flex = styled.div`
  align-items: ${({ align }) => align ?? "stretch"};
  display: flex;
  flex-direction: ${({ dir }) => dir ?? "row"};
  flex: ${({ flex }) => flex ?? "0"};
  gap: ${({ gap }) => gap ?? "0"};
  justify-content: ${({ justify }) => justify ?? "stretch"};
`;

export const Row = styled.div`
  align-items: ${({ align }) => align ?? "stretch"};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ justify }) => justify ?? "stretch"};
`;

export const Col = styled.div`
  flex: 0 0 auto;
`;

export const Text = styled.p`
  color: ${({ color }) => (color ? color : colors.white)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  vertical-align: middle;
`;

export const Page = styled.main`
  min-height: 100vh;
  padding: 60px 0 60px;
`;

export const PageTitle = styled.h2`
  -ms-word-wrap: break-word;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  padding: 100px 0 40px;
  word-wrap: break-word;
`;

export const Section = styled.section`
  padding: 30px 0 70px;
`;

export const SectionTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  margin: 1.5rem 0;
  word-wrap: break-word;
  -ms-word-wrap: break-word;
`;

const BaseAnchor = css`
  cursor: pointer;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  font-size: 1rem;
  font-weight: 400;
  transition: 0.4s;
  :hover {
    color: ${colors.blue1};
  }
`;

export const InternalLink = styled(Link)`
  ${BaseAnchor}
`;

export const ExternalLink = styled.a`
  ${BaseAnchor}
`;

export const FooterTitle = styled.h4`
  margin-bottom: 16px;
`;

export const Form = styled.form`
  align-items: center;
  background: ${colors.bg2};
  border-radius: 6px;
  border: 1px solid ${colors.bg2};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  padding: 1rem;
  position: relative;
  width: 100%;
`;

export const FormControl = styled.div`
  align-items: stretch;
  display: flex;
  gap: 1rem;
  justify-content: stretch;
  width: 100%;
`;

export const Input = styled.input`
  appearance: auto;
  background: ${colors.bg1};
  border-radius: 6px;
  border: none;
  color: ${colors.text2};
  font-size: 14px;
  font-weight: 500;
  outline: none;
  padding: 16px;
  transition: 0.5s;
  width: 100%;
  -moz-appearance: auto;
  -webkit-appearance: auto;
  -webkit-transition: 0.5s;
`;

export const TextArea = styled.textarea`
  appearance: auto;
  background: ${colors.bg1};
  border-radius: 6px;
  border: none;
  color: ${colors.text2};
  font-size: 14px;
  font-weight: 500;
  height: 120px;
  outline: none;
  padding: 16px;
  resize: none;
  transition: 0.5s;
  width: 100%;
  -moz-appearance: auto;
  -webkit-appearance: auto;
  -webkit-transition: 0.5s;
`;

export const RoundImage = styled(Image)`
  border-radius: 100%;
`;
