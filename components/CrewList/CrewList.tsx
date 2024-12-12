import { CrewMember } from "@/types/DetailsType";
import { FlatList, Image, Text, View } from "react-native";
import styles from "./styles";

export default function CrewList({ crew }: { crew: CrewMember[] }) {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={crew}
      horizontal={true}
      pagingEnabled={false}
      keyExtractor={(item) => `${item.job}${item.name}`}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
              uri: `https://image.tmdb.org/t/p/w220_and_h330_face${item.profile_path}`,
            }}
          />
          <View testID="personOfProduction" style={styles.containerTexts}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.job}>{item.job}</Text>
          </View>
        </View>
      )}
    />
  );
}
