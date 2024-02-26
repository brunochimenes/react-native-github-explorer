import { Linking } from "react-native";
import { useRoute } from "@react-navigation/native";

import {
  Container,
  RepoInfo,
  Avatar,
  TextGroup,
  Title,
  Description,
  RepoStats,
  Stats,
  StatsCounter,
  StatsText,
  IssuesList,
} from "./styles";

import { useRepository } from "../../hooks/useRepository";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";

type RepositoryParams = {
  repositoryId: number;
};

export function Repository() {
  const { params } = useRoute();
  const { repositoryId } = params as RepositoryParams;

  const { findRepositoryById } = useRepository();

  const repository = findRepositoryById(repositoryId);

  const {
    full_name,
    description,
    stargazers_count,
    forks_count,
    open_issues_count,
    owner,
    issues,
  } = repository;

  function handleIssueNavigation(issueUrl: string) {
    Linking.openURL(`${issueUrl}`);
  }

  return (
    <Background>
      <Header showBackButton />

      <Container>
        <RepoInfo>
          <Avatar source={{ uri: owner.avatar_url }} />

          <TextGroup>
            <Title>{full_name}</Title>

            <Description numberOfLines={2}>{description}</Description>
          </TextGroup>
        </RepoInfo>

        <RepoStats>
          <Stats>
            <StatsCounter>{stargazers_count}</StatsCounter>
            <StatsText>Stars</StatsText>
          </Stats>

          <Stats>
            <StatsCounter>{forks_count}</StatsCounter>
            <StatsText>Forks</StatsText>
          </Stats>

          <Stats>
            <StatsCounter>{open_issues_count}</StatsCounter>
            <StatsText>Issues/Open</StatsText>
          </Stats>
        </RepoStats>

        <IssuesList
          data={issues}
          keyExtractor={(issue) => String(issue.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: issue }) => (
            <Card
              data={{
                id: issue.id,
                title: issue.title,
                subTitle: issue.user.login,
              }}
              onPress={() => handleIssueNavigation(issue.html_url)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </Container>
    </Background>
  );
}
