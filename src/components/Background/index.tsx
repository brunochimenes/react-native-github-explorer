import { ReactNode } from "react";

import { Container } from "./styles";

import githubBg from "../../assets/github_bg.png";

type BackgroundProps = {
  children: ReactNode;
};

export function Background({ children }: BackgroundProps) {
  return <Container source={githubBg}>{children}</Container>;
}
