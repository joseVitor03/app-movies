import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  CrewMember,
  MovieDetailsType,
  SerieDetailsType,
} from "@/types/DetailsType";
import MovieDetails from "@/components/MovieDetails/MovieDetails";
import SerieDetails from "@/components/SerieDetails/SerieDetails";
export default function PageDetails() {
  const KEY = process.env.EXPO_PUBLIC_API_KEY;
  const API = process.env.EXPO_PUBLIC_API_URL;
  const OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${KEY}`,
    },
  };
  const { movieId, serieId } = useLocalSearchParams() as unknown as {
    movieId?: number;
    serieId?: number;
  };

  const [movieDetails, setMovieDetails] = useState<MovieDetailsType | null>(
    null,
  );
  const [serieDetails, setSerieDetails] = useState<SerieDetailsType | null>(
    null,
  );
  useEffect(() => {
    const load = async () => {
      if (movieId) {
        try {
          const dataMovie = await fetch(
            `${API}movie/${movieId}?language=pt-BR`,
            OPTIONS,
          );
          const dataCredits = await fetch(
            `${API}movie/${movieId}/credits?language=pt-BR`,
            OPTIONS,
          );
          const resultCredits = await dataCredits.json();
          const resultMovie = await dataMovie.json();
          setMovieDetails({
            data: resultMovie,
            credits: {
              cast: resultCredits.cast.slice(0, 6),
              crew: resultCredits.crew
                .filter(
                  (curr: CrewMember) =>
                    curr.job === "Director" || curr.department === "Writing",
                )
                .slice(0, 4),
            },
          });
        } catch (error) {
          console.error("Erro ao carregar filmes:", error);
        }
      } else {
        try {
          const dataSerie = await fetch(
            `${API}tv/${serieId}?language=pt-BR`,
            OPTIONS,
          );
          const dataCredits = await fetch(
            `${API}tv/${serieId}/credits?language=pt-BR`,
            OPTIONS,
          );
          const resultCredits = await dataCredits.json();
          const resultSerie = await dataSerie.json();
          setSerieDetails({
            data: resultSerie,
            credits: {
              cast: resultCredits.cast.slice(0, 6),
            },
          });
        } catch (error) {
          console.error("Erro ao carregar filmes:", error);
        }
      }
    };
    load();
  }, []);

  return (
    <View>
      {movieDetails && <MovieDetails movie={movieDetails} />}
      {serieDetails && <SerieDetails serie={serieDetails} />}
    </View>
  );
}
