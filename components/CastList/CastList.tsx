import { CastMember } from "@/types/DetailsType";
import { FlatList, Image, Text, View } from "react-native";
import styles from "./styles";

export default function CastList({ cast }: { cast: CastMember[] }) {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={cast}
      horizontal={true}
      pagingEnabled={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
            source={{
              uri: `https://image.tmdb.org/t/p/w220_and_h330_face${item.profile_path}`,
            }}
          />
          <View style={styles.containerTexts}>
            <Text style={styles.nameActor}>{item.name}</Text>
            <Text style={styles.nameCharacter}>{item.character}</Text>
          </View>
        </View>
      )}
    />
  );
}
