import { TextInput, FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import { RepositoryProps } from "../../contexts/RepositoryContext";

export const Container = styled.View`
  flex: 1;

  padding: 0 20px;
`;

export const BackgroundImg = styled.Image`
  left: 5%;
  position: absolute;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_800};

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;

  margin-top: 32px;
`;

export const Input = styled.View`
  flex-direction: row;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  margin-top: 20px;
  border-radius: 5px;
`;

export const InputField = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_400,
}))`
  flex: 1;

  color: ${({ theme }) => theme.COLORS.GRAY_800};

  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  padding: 0 12px;
`;

export const InputButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({ theme }) => theme.COLORS.GREEN_200};

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 16px;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const RepositoriesList = styled(
  FlatList as new (
    props: FlatListProps<RepositoryProps>
  ) => FlatList<RepositoryProps>
)`
  margin-top: 32px;
`;
