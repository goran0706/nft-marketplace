import { useMemo } from "react";
import jazzicon from "@metamask/jazzicon";
import styled from "@emotion/styled";

const Icon = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

const Identicon = ({ size, seed }) => {
  const icon = useMemo(
    () => seed && jazzicon(size, parseInt(seed.slice(2, 10), 16)),
    [size, seed]
  );

  return <Icon dangerouslySetInnerHTML={{ __html: icon?.outerHTML }} />;
};

export default Identicon;
