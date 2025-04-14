
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { ClerkProvider } from "@clerk/clerk-expo";
import { StatusBar } from "react-native";
import Initiallayout from "@/components/Initiallayout";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeAreaProvider>
      <StatusBar backgroundColor="black" barStyle="light-content" />
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
          <Initiallayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}
