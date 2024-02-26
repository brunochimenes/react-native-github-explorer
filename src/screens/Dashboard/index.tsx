import { useRef, useState } from "react";
import { TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  BackgroundImg,
  Title,
  Input,
  InputField,
  InputButton,
  Icon,
  RepositoriesList,
} from "./styles";

import { useRepository } from "../../hooks/useRepository";

import githubBg from "../../assets/github_bg.png";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";

export function Dashboard() {
  const [inputText, setInputText] = useState("");

  const { navigate } = useNavigation();

  const { addRepository, repositories } = useRepository();

  const inputRef = useRef<TextInput>(null);

  function handleAddRepository(ownerAndRepoName: string) {
    addRepository(ownerAndRepoName);

    setInputText("");
  }

  function handleRepositoryPageNavigation(id: number) {
    navigate("Repository", {
      repositoryId: id,
    });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header />

        <BackgroundImg
          source={githubBg}
          defaultSource={githubBg}
          alt="Pessoas treinando"
          resizeMode="contain"
        />

        <Title>Explore repositórios{"\n"}no GitHub.</Title>

        <Input>
          <InputField
            ref={inputRef}
            placeholder="Digite aqui 'usuário/repositório'"
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={() => handleAddRepository(inputText)}
            returnKeyType="send"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <InputButton
            onPress={() => handleAddRepository(inputText)}
            disabled={inputText === "" ? true : false}
          >
            <Icon name="search" size={20} />
          </InputButton>
        </Input>

        <RepositoriesList
          data={repositories}
          showsVerticalScrollIndicator={false}
          keyExtractor={(repository) => String(repository.id)}
          renderItem={({ item: repository }) => (
            <Card
              key={repository.id}
              data={{
                id: repository.id,
                title: repository.full_name,
                subTitle: repository.description,
                imageUrl: repository.owner.avatar_url,
              }}
              onPress={() => handleRepositoryPageNavigation(repository.id)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
}
