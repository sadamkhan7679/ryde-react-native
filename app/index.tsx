import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      className={"flex justify-center items-center "}
    >
      <Text className="text-red-400">
        Edit app/index.tsx to edit this screen.sssss
      </Text>
    </SafeAreaView>
  );
}
