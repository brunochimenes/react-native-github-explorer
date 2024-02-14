import { TextInput, FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import { RepositoryProps } from "../../contexts/RepositoriesProvider";

export const Container = styled.View`
  flex: 1;

  margin-top: 100px;
  padding: 0 20px;
`;

export const AddGithubRepo = styled.View``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray_800};

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 28px;
`;

export const Input = styled.View`
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.white};

  margin-top: 20px;
  border-radius: 5px;
`;

export const InputField = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.gray_400,
}))`
  flex: 1;

  color: ${({ theme }) => theme.colors.gray_800};

  font-size: 16px;

  padding: 0 12px;
`;

export const InputButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({ theme }) => theme.colors.green_200};

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 16px;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.white};
`;

export const RepositoriesList = styled(
  FlatList as new (
    props: FlatListProps<RepositoryProps>
  ) => FlatList<RepositoryProps>
)`
  margin-top: 64px;
`;
