import { View, TouchableOpacity, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./styles";

export default function CountPage({
  updatePage,
  page,
}: {
  updatePage: (newPage: number) => void;
  page: number;
}) {
  return (
    <View style={styles.containerButtons}>
      <TouchableOpacity
        disabled={page === 1 && true}
        onPress={() => updatePage(page - 1)}
      >
        <AntDesign
          name="arrowleft"
          size={30}
          color={page === 1 ? "#b6b6b6" : "white"}
        />
      </TouchableOpacity>
      <Text style={styles.count}>{page}</Text>
      <TouchableOpacity onPress={() => updatePage(page + 1)}>
        <AntDesign name="arrowright" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}
