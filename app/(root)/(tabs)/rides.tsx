import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RidesPage = () => {
  return (
    <SafeAreaView className={"flex: 1, justify-center, items-center"}>
      <Text className={"text-blue-500"}>Rides</Text>
    </SafeAreaView>
  );
};

export default RidesPage;
