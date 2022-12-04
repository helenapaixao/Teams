import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Groups from '@screens/Groups';
import {Players} from '@screens/Players';
import NewGroup from '@screens/NewGroup';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{
        headerShown: false,
    }}>
      <Screen name="groups" component={Groups} />
      <Screen name="players" component={Players} />
        <Screen name="new" component={NewGroup} />
    </Navigator>
  );
}



