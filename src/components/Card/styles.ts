import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface CardContainerProps {
  hasImage: boolean;
}

export const Container = styled.View``;

export const CardContainer = styled.Pressable<CardContainerProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;

  ${({ hasImage }) =>
    !hasImage &&
    css`
      margin-bottom: 12px;
    `}
  border-radius: 5px;
  padding: 12px 18px;
`;

export const Info = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 64px;
  height: 64px;

  margin-right: 12px;
  border-radius: 32px;
`;

export const TextGroup = styled.View`
  flex: 1;
  height: 64px;
  justify-content: space-around;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray_700};

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.gray_400};

  font-size: 14px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.gray_200};

  margin-left: 12px;
`;

export const DeleteContainer = styled.View`
  justify-content: center;
  align-items: flex-end;

  background-color: red;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0 30px;
`;

export const DeleteIcon = styled(Feather)`
  color: #fff;
`;
