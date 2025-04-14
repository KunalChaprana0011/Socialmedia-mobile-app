import { Text, TouchableOpacity, View } from "react-native";

import { Link } from "expo-router";
import { styles } from "@/styles/auth.styles";

export default function Index() {
  return (
    <View
      style= {styles.container}
    >
      <Link href={"/notifications"}>VIsit Notifications </Link>
      <Link href={"/profile"}>VIsit Profiles </Link>
    </View>
  );
}

