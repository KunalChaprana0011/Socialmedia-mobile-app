import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { StatusBar } from "react-native";
import Initiallayout from "@/components/Initiallayout";
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";

export default function RootLayout() {
  return (
    <ClerkAndConvexProvider>
      <SafeAreaProvider>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
          <Initiallayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkAndConvexProvider>
  );
}
