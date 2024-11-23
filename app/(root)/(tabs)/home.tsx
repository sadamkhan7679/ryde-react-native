import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  return (
    <SafeAreaView className={"flex: 1, justify-center, items-center"}>
      <Text className={"text-blue-500"}>Home</Text>
    </SafeAreaView>
  );
};

export default HomePage;
