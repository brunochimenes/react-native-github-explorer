import { createStackNavigator } from "@react-navigation/stack";

import { Dashboard } from "../screens/Dashboard";
import { Repository } from "../screens/Repository";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Dashboard" component={Dashboard} />

      <Screen name="Repository" component={Repository} />
    </Navigator>
  );
}
