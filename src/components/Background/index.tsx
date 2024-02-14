import { ReactNode } from "react";

import { Container, SafeAreaViewIOS } from "./styles";

import githubBg from "../../assets/github_bg.png";

interface BackgroundProps {
  children: ReactNode;
}

export function Background({ children }: BackgroundProps) {
  return (
    <Container source={githubBg}>
      <SafeAreaViewIOS>{children}</SafeAreaViewIOS>
    </Container>
  );
}
