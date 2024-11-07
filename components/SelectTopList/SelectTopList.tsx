import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
export default function SelectTopList({
  activeTop,
  setActiveTop,
}: {
  activeTop: string;
  setActiveTop: React.Dispatch<React.SetStateAction<"Movies" | "Series">>;
}) {
  return (
    <View style={styles.containerTop}>
      <TouchableOpacity
        disabled={activeTop === "Movies"}
        onPress={() => setActiveTop("Movies")}
      >
        <Text
          style={
            activeTop === "Movies" ? styles.btnSelectActive : styles.btnSelect
          }
        >
          Filmes
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={activeTop === "Series"}
        onPress={() => setActiveTop("Series")}
      >
        <Text
          style={
            activeTop === "Series" ? styles.btnSelectActive : styles.btnSelect
          }
        >
          Séries
        </Text>
      </TouchableOpacity>
    </View>
  );
}
