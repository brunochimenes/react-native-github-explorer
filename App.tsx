import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import theme from "./src/theme";

import { RepositoryContextProvider } from "./src/contexts/RepositoryContext";

import { Routes } from "./src/routes";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />

      <RepositoryContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </RepositoryContextProvider>
    </ThemeProvider>
  );
}
