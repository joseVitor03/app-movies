import { SerieDetailsType } from "@/types/DetailsType";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderDetails from "../HeaderDetails/HeaderDetails";
import CastList from "../CastList/CastList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductionCompanies from "../ProductionCompanies/ProductionCompanies";
import Entypo from "@expo/vector-icons/Entypo";
import styles from "./styles";
import { useEffect, useState } from "react";

export default function SerieDetails({ serie }: { serie: SerieDetailsType }) {
  const [isFavorite, setIsFavorite] = useState<SerieDetailsType | null>(null);

  const handleFavorite = async () => {
    try {
      console.log("a");

      const data = (await AsyncStorage.getItem("favoriteSeries")) || "[]";
      console.log(data);

      const favorites = (JSON.parse(data) as SerieDetailsType[]) || [];

      if (isFavorite !== null) {
        console.log("b");

        const result = favorites.filter(
          (curr) => curr.data.id !== serie.data.id,
        );
        await AsyncStorage.setItem("favoriteSeries", JSON.stringify(result));
        setIsFavorite(null);
      } else {
        console.log("c");
        await AsyncStorage.setItem(
          "favoriteSeries",
          JSON.stringify([...favorites, serie]),
        );
        setIsFavorite(serie);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearFavorites = async () => {
    try {
      await AsyncStorage.removeItem("favoriteSeries");
      console.log("favoritesSeries cleared");
    } catch (error) {
      console.error("Failed to clear favoriteSeries:", error);
    }
  };

  useEffect(() => {
    const load = async () => {
      try {
        const data = (await AsyncStorage.getItem("favoriteSeries")) || "[]";
        const favorites = (JSON.parse(data) as SerieDetailsType[]) || []; // Garantindo array vazio
        console.log(favorites);

        const result = favorites.find((curr) => curr.data.id === serie.data.id);
        if (result) {
          setIsFavorite(result);
        }
      } catch (error) {
        console.log(error);
      }
      // clearFavorites();
    };
    load();
  }, []);
  console.log(isFavorite);

  return (
    <View style={styles.main}>
      <HeaderDetails title={serie.data.name} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.main}>
          <Image
            style={styles.poster}
            source={{
              uri: `https://image.tmdb.org/t/p/original/${serie.data.poster_path}`,
            }}
          />
          <View style={styles.containerNoteAndHeart}>
            <Text style={styles.note}>
              <Entypo name="star" size={24} color="yellow" />
              {Number(serie.data.vote_average).toFixed(1)}/10
            </Text>
            <TouchableOpacity onPress={handleFavorite}>
              <Entypo
                name="heart"
                size={24}
                color={isFavorite !== null ? "red" : "black"}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={styles.containerGenres}
            horizontal
            data={serie.data.genres}
            pagingEnabled={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.genre}>
                <Text style={styles.genreText}>{item.name}</Text>
              </View>
            )}
          />
          <Text style={styles.date}>
            Data Lançamento:{" "}
            {serie.data.first_air_date.split("-").reverse().join("/")}
          </Text>
          <Text style={styles.sinopse}>Sinopse:</Text>
          <Text style={styles.overview}>{serie.data.overview}</Text>
          <View>
            <Text style={styles.title}>Elenco:</Text>
            <CastList cast={serie.credits.cast} />
          </View>
          <View>
            <Text style={styles.title}>Criado por:</Text>
            <FlatList
              contentContainerStyle={styles.containerCreated}
              horizontal
              data={serie.data.created_by}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Image
                    style={styles.cardImage}
                    source={{
                      uri: `https://image.tmdb.org/t/p/w220_and_h330_face${item.profile_path}`,
                    }}
                  />
                  <View style={styles.containerTexts}>
                    <Text style={styles.name}>{item.name}</Text>
                  </View>
                </View>
              )}
            />
          </View>
          <View>
            <Text style={styles.title}>Empresas de Produção:</Text>
            <ProductionCompanies companies={serie.data.production_companies} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
