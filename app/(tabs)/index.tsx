import { Text, TouchableOpacity, View } from "react-native";
import {styles} from "../../styles/auth.styles.js"
import { Link } from "expo-router";

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

