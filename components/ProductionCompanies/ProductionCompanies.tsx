import { ProductionCompany } from "@/types/DetailsType";
import { FlatList, Image, Text, View } from "react-native";
import styles from "./styles";
export default function ProductionCompanies({
  companies,
}: {
  companies: ProductionCompany[];
}) {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={companies}
      horizontal={true}
      pagingEnabled={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={styles.containerText}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        </View>
      )}
    />
  );
}
