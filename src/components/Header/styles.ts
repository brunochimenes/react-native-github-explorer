import { Platform } from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const SafeAreaViewIOS = styled.SafeAreaView``;

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${() => (Platform.OS === "android" ? "30px 20px" : "15px 20px")};
`;

export const Logo = styled.Image``;

export const BackButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})``;

export const Icon = styled(Feather)``;

export const BlankSpace = styled.View`
  width: 20px;
`;
