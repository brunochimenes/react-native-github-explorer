import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  margin-bottom: 12px;

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
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_400};

  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  margin-left: 12px;
`;
