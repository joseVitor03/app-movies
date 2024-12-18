import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useContext, useEffect, useRef } from "react";
import styles from "./styles";
import CountPage from "../CountPage/CountPage";
import { SearchContext } from "@/context/SearchContext";
import { useRouter } from "expo-router";

export default function MovieList() {
  const { movies, loadMovies, pageMovies, searchMovieAPI, searchMovie } =
    useContext(SearchContext);
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);

  const updatePage = async (newPage: number) => {
    if (searchMovie.length > 0) {
      await searchMovieAPI(newPage);
    } else {
      console.log("a");

      await loadMovies(newPage);
    }
    scrollRef.current?.scrollTo({ animated: true, y: 0 });
  };

  useEffect(() => {
    const load = async () => {
      await loadMovies(pageMovies);
    };
    load();
  }, []);

  useEffect(() => {
    const load = async () => {
      scrollRef.current?.scrollTo({ animated: true, y: 0 });
    };
    load();
  }, [movies]);

  return (
    <View style={styles.container}>
      {movies.length > 0 ? (
        <ScrollView ref={scrollRef} contentContainerStyle={styles.listMovies}>
          {movies.map((movie) => (
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
                  <Image
                    style={{ width: 25, height: 25 }}
                    source={require("@/assets/images/star.png")}
                  />
                  {Number(movie.vote_average).toFixed(1)}
                </Text>
                <Text style={styles.title}>{movie.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
          <View>
            <CountPage updatePage={updatePage} page={pageMovies} />
          </View>
        </ScrollView>
      ) : (
        <View style={styles.notFoundFilms}>
          <Image source={require("@/assets/images/movie-off.png")} />
          <Text style={styles.notFoundTitle}>Nenhum Filme encontrado.</Text>
        </View>
      )}
    </View>
  );
}
