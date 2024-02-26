import {
  Container,
  Info,
  Image,
  TextGroup,
  Title,
  Description,
  Icon,
} from "./styles";

type CardProps = {
  data: {
    id: number;
    title: string;
    subTitle: string;
    imageUrl?: string;
  };
  onPress: () => void;
};

export function Card({ data, onPress }: CardProps) {
  return (
    <Container onPress={onPress}>
      <Info>
        {data.imageUrl && <Image source={{ uri: data.imageUrl }} />}

        <TextGroup>
          <Title numberOfLines={1}>{data.title}</Title>
          <Description numberOfLines={2}>{data.subTitle}</Description>
        </TextGroup>
      </Info>

      <Icon name="chevron-right" size={20} />
    </Container>
  );
}
