"use client";
import { colors } from "@/theme";
import { FaImage } from "react-icons/fa";
import Image from "next/image";
import styled from "@emotion/styled";

const ThumbnailFrame = styled.div`
  align-items: center;
  background: ${colors.bg2};
  border-radius: 6px;
  border: 1px solid ${colors.bg2};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  height: ${({ height }) => height ?? "100%"};
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: ${({ width }) => width ?? "100%"};
`;

const Thumbnail = ({ preview, height, width }) => {
  return (
    <ThumbnailFrame width={width} height={height}>
      {preview ? (
        <Image
          src={preview}
          alt="preview item"
          fill
          style={{ objectFit: "cover" }}
        />
      ) : (
        <FaImage color="grey" size={48} />
      )}
    </ThumbnailFrame>
  );
};

export default Thumbnail;
