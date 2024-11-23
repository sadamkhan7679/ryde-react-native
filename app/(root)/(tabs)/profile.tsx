import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfilePage = () => {
  return (
    <SafeAreaView className={"flex: 1, justify-center, items-center"}>
      <Text className={"text-blue-500"}>Profile</Text>
    </SafeAreaView>
  );
};

export default ProfilePage;
