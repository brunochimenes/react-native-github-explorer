import { useNavigation } from "@react-navigation/native";

import { Container, Logo, BackButton, Icon, ImgContainer } from "./styles";

import logoImg from "../../assets/logo.png";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <Icon name="arrow-left" />
        </BackButton>
      )}

      <ImgContainer>
        <Logo source={logoImg} />
      </ImgContainer>
    </Container>
  );
}
