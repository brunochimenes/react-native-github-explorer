import { ViewProps } from "react-native";

import { Container } from "./styles";

interface CardAnimationProps extends ViewProps {
  children: React.ReactNode;
}

export function CardAnimation({ children }: CardAnimationProps) {
  return <Container>{children}</Container>;
}
