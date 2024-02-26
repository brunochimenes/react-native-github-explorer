import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";

import { IssueProps } from "../../contexts/RepositoryContext";

export const Container = styled.View`
  flex: 1;

  margin-top: 32px;
  padding: 0 20px;
`;

export const RepoInfo = styled.View`
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;

  border-radius: 40px;
`;

export const TextGroup = styled.View`
  flex: 1;
  justify-content: space-evenly;

  margin-left: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_800};

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_500};

  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const RepoStats = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 20px;
  padding: 0 20px;
`;

export const Stats = styled.View`
  justify-content: center;
  align-items: center;
`;

export const StatsCounter = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_800};

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`;

export const StatsText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_500};

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const IssuesList = styled(
  FlatList as new (props: FlatListProps<IssueProps>) => FlatList<IssueProps>
)`
  margin-top: 32px;
`;
