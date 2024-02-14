import styled from "styled-components/native";

export const Container = styled.View``;

export const TitleContainer = styled.ScrollView``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray_800};

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
`;
