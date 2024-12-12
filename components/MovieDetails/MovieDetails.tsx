import { MovieDetailsType } from "@/types/DetailsType";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderDetails from "../HeaderDetails/HeaderDetails";
import Entypo from "@expo/vector-icons/Entypo";
import styles from "./styles";
import CastList from "../CastList/CastList";
import CrewList from "../CrewList/CrewList";
import ProductionCompanies from "../ProductionCompanies/ProductionCompanies";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MovieDetails({ movie }: { movie: MovieDetailsType }) {
  const [isFavorite, setIsFavorite] = useState<MovieDetailsType | null>(null);

  const handleFavorite = async () => {
    const data = (await AsyncStorage.getItem("favoriteMovies")) || "[]";
    const favorites = JSON.parse(data) as MovieDetailsType[];
    if (isFavorite) {
      setIsFavorite(null);
      const result = favorites.filter((curr) => curr.data.id !== movie.data.id);
      console.log(result);

      await AsyncStorage.setItem("favoriteMovies", JSON.stringify(result));
    } else {
      await AsyncStorage.setItem(
        "favoriteMovies",
        JSON.stringify([...favorites, movie]),
      );
      setIsFavorite(movie);
    }
  };

  useEffect(() => {
    const load = async () => {
      const data = (await AsyncStorage.getItem("favoriteMovies")) || "[]";
      const favorites = JSON.parse(data) as MovieDetailsType[];
      const result = favorites.find((curr) => curr.data.id === movie.data.id);
      if (result) {
        setIsFavorite(result);
      }
    };
    load();
  }, []);

  return (
    <View style={styles.main}>
      <HeaderDetails title={movie.data.title} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.main}>
          <Image
            style={styles.poster}
            source={{
              uri: `https://image.tmdb.org/t/p/original/${movie.data.poster_path}`,
            }}
          />
          <View style={styles.contaienrNoteAndHeart}>
            <Text style={styles.note}>
              <Entypo name="star" size={24} color="yellow" />
              {Number(movie.data.vote_average).toFixed(1)}/10
            </Text>
            <TouchableOpacity onPress={handleFavorite}>
              <Entypo
                name="heart"
                testID="btnFavoriteMovie"
                size={24}
                color={isFavorite !== null ? "red" : "black"}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            contentContainerStyle={styles.containerGenres}
            horizontal
            data={movie.data.genres}
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
            {movie.data.release_date.split("-").reverse().join("/")}
          </Text>
          <Text style={styles.sinopse}>Sinopse:</Text>
          <Text style={styles.overview}>{movie.data.overview}</Text>
          <View>
            <Text style={styles.title}>Elenco:</Text>
            <CastList cast={movie.credits.cast} />
          </View>
          <View>
            <Text style={styles.title}>Equipe Produção:</Text>
            <CrewList crew={movie.credits.crew} />
          </View>
          <View>
            <Text testID="EnterprizeProduction" style={styles.title}>
              Empresas de Produção:
            </Text>
            <ProductionCompanies companies={movie.data.production_companies} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
