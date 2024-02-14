import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";

import { Container, TitleContainer, Title } from "./styles";

interface TitleAnimationProps {
  children: string;
}

export function TitleAnimation({ children }: TitleAnimationProps) {
  const [textWidth, setTextWidth] = useState(0);

  return (
    <Container>
      <TitleContainer
        horizontal
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(contentWidth) => {
          if (textWidth !== 0) return;

          setTextWidth(contentWidth);
        }}
      >
        <Title>{children}</Title>
      </TitleContainer>
    </Container>
  );
}
