import { MoviesType, SeriesType } from "@/types/CardsType";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import CountPage from "../CountPage/CountPage";
import Entypo from "@expo/vector-icons/Entypo";
import styles from "./styles";
import { useRef } from "react";
import { useRouter } from "expo-router";
import topRatedMovies from "@/functions/topRatedMovies";
import topRatedSeries from "@/functions/topRatedSeries";

export default function TopRated({
  movies,
  series,
  activeTop,
  countPageMovie,
  countPageSerie,
  setMovieList,
  setSerieList,
  setCountPageMovie,
  setCountPageSerie,
}: {
  movies: MoviesType[];
  series: SeriesType[];
  activeTop: "Movies" | "Series";
  countPageMovie: number;
  countPageSerie: number;
  setMovieList: React.Dispatch<React.SetStateAction<MoviesType[]>>;
  setSerieList: React.Dispatch<React.SetStateAction<SeriesType[]>>;
  setCountPageMovie: React.Dispatch<React.SetStateAction<number>>;
  setCountPageSerie: React.Dispatch<React.SetStateAction<number>>;
}) {
  const scrollRef = useRef<ScrollView>(null);
  const router = useRouter();

  const updatePage = async (newPage: number) => {
    if (activeTop === "Movies") {
      setCountPageMovie(newPage);
      const result = await topRatedMovies(newPage);
      setMovieList(result);
    } else {
      setCountPageSerie(newPage);
      const result = await topRatedSeries(newPage);
      setSerieList(result);
    }
    scrollRef.current?.scrollTo({ animated: true, y: 0 });
  };

  return (
    <ScrollView ref={scrollRef} contentContainerStyle={styles.listMovies}>
      {activeTop === "Movies" ? (
        <>
          {movies.map((movie: MoviesType) => (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/pages/PageDetails/PageDetails",
                  params: { movieId: movie.id },
                })
              }
              style={styles.card}
              key={movie.id}
            >
              <View>
                <Image
                  style={styles.cardPoster}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`,
                  }}
                />
                <Text style={styles.note}>
                  <Entypo name="star" size={24} color="yellow" />
                  {Number(movie.vote_average).toFixed(1)}
                </Text>
                <Text style={styles.title}>{movie.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
          <View>
            <CountPage updatePage={updatePage} page={countPageMovie} />
          </View>
        </>
      ) : (
        <>
          {series.map((serie: SeriesType) => (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/pages/PageDetails/PageDetails",
                  params: { serieId: serie.id },
                })
              }
              style={styles.card}
              key={serie.id}
            >
              <View>
                <Image
                  style={styles.cardPoster}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${serie.poster_path}`,
                  }}
                />
                <Text style={styles.note}>
                  <Entypo name="star" size={24} color="yellow" />
                  {Number(serie.vote_average).toFixed(1)}
                </Text>
                <Text style={styles.title}>{serie.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
          <View>
            <CountPage updatePage={updatePage} page={countPageSerie} />
          </View>
        </>
      )}
    </ScrollView>
  );
}
