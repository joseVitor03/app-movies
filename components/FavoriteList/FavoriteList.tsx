import { MovieDetailsType, SerieDetailsType } from "@/types/DetailsType";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";

export default function FavoriteList({
  series,
  movies,
  activeFavorite,
}: {
  series: SerieDetailsType[];
  movies: MovieDetailsType[];
  activeFavorite: "Movies" | "Series";
}) {
  return (
    <View>
      {activeFavorite === "Movies" && (
        <View style={styles.container}>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <TouchableOpacity key={movie.data.id} style={styles.card}>
                <View>
                  <Image
                    style={styles.cardPoster}
                    source={{
                      uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.data.poster_path}`,
                    }}
                  />
                  <Text style={styles.note}>
                    {movie.data.vote_average.toFixed(1)}/10
                  </Text>
                  <Text style={styles.title}>{movie.data.title}</Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.notFound}>
              <MaterialCommunityIcons
                name="filmstrip-off"
                size={50}
                color="#fff"
              />
              <Text style={styles.notFoundTitle}>Nenhum Filme encontrado.</Text>
            </View>
          )}
        </View>
      )}
      {activeFavorite === "Series" && (
        <View style={styles.container}>
          {series.length > 0 ? (
            series.map((serie) => (
              <TouchableOpacity key={serie.data.id} style={styles.card}>
                <View>
                  <Image
                    style={styles.cardPoster}
                    source={{
                      uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${serie.data.poster_path}`,
                    }}
                  />
                  <Text style={styles.note}>
                    {serie.data.vote_average.toFixed(1)}/10
                  </Text>
                  <Text style={styles.title}>{serie.data.name}</Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.notFound}>
              <MaterialCommunityIcons
                name="television-off"
                size={50}
                color="#fff"
              />
              <Text style={styles.notFoundTitle}>
                Nenhuma Série encontrada.
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}
