import { Text, View, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./styles";
import { useRouter } from "expo-router";

export default function HeaderDetails({ title }: { title: string }) {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
