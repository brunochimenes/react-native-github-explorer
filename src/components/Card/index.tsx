import { useRef } from "react";
import { Alert } from "react-native";

import {
  Container,
  CardContainer,
  Info,
  Image,
  TextGroup,
  Title,
  Description,
  Icon,
  DeleteContainer,
  DeleteIcon,
} from "./styles";

import { useRepositories } from "../../hooks/useRepositories";

import { CardAnimation } from "./CardAnimation";

interface CardProps {
  data: {
    id: number;
    title: string;
    subTitle: string;
    imageUrl?: string;
  };
  onPress: () => void;
}

export function Card({ data, onPress }: CardProps) {
  // const { removeRepository } = useRepositories();

  function handleDeleteAlert() {
    // Alert.alert(
    //   "Remover item",
    //   "Você tem certeza que deseja remover esse repositório da lista?",
    //   [
    //     {
    //       text: "Não",
    //       onPress: () => swipeableRef.current?.close(),
    //       style: "cancel",
    //     },
    //     { text: "Sim", onPress: () => removeRepository(data.id) },
    //   ]
    // );
  }

  function CardContent() {
    return (
      <CardContainer hasImage={!!data.imageUrl} onPress={onPress}>
        <Info>
          {data.imageUrl && <Image source={{ uri: data.imageUrl }} />}

          <TextGroup>
            <Title numberOfLines={1}>{data.title}</Title>
            <Description numberOfLines={1}>{data.subTitle}</Description>
          </TextGroup>
        </Info>

        <Icon name="chevron-right" size={20} />
      </CardContainer>
    );
  }

  function SwipeableDelete() {
    return (
      <DeleteContainer>
        <DeleteIcon name="trash" size={24} />
      </DeleteContainer>
    );
  }

  if (data.imageUrl) {
    return (
      <CardAnimation testID="repository-card">
        <Container>
          <CardContent />
        </Container>
      </CardAnimation>
    );
  }

  return (
    <CardAnimation>
      <CardContent />
    </CardAnimation>
  );
}
