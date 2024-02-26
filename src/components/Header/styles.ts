import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

export const Container = styled(SafeAreaView)`
  flex-direction: row;

  margin-top: 20px;
`;

export const ImgContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image``;

export const BackButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding-left: 20px;
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: 22,
  color: theme.COLORS.GRAY_800,
}))``;
