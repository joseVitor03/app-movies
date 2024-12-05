import { MoviesType, SeriesType } from "@/types/CardsType";
import { SearchContextType } from "@/types/SearchContextType";
import React, { createContext, useRef, useState } from "react";
import { Keyboard, ScrollView } from "react-native";

export const SearchContext = createContext({} as SearchContextType);

export default function SearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const KEY = process.env.EXPO_PUBLIC_API_KEY;
  const API = process.env.EXPO_PUBLIC_API_URL;

  const scrollRef = useRef<ScrollView>(null);

  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [pageMovies, setPageMovies] = useState(1);
  const [searchMovie, setSearchMovie] = useState("");
  const [series, setSeries] = useState<SeriesType[]>([]);
  const [pageSeries, setPageSeries] = useState(1);
  const [searchSeries, setSearchSeries] = useState("");

  const searchSeriesAPI = async (currentPage: number = 1) => {
    try {
      const data = await fetch(
        `${API}search/tv?query=${searchSeries}&include_adult=false&language=pt-BR&page=${currentPage}'`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${KEY}`,
          },
        },
      );
      console.log(searchSeries);

      scrollRef.current?.scrollTo({ animated: true, y: 0 });
      const { results } = await data.json();
      setPageSeries(currentPage);
      setSeries(results);
      Keyboard.dismiss();
    } catch (error) {
      console.error("Erro ao carregar filmes:", error);
      setSeries(series);
    }
  };

  const loadSeries = async (currentPage: number = 1) => {
    try {
      const data = await fetch(
        `${API}tv/airing_today?language=pt-BR&page=${currentPage}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${KEY}`,
          },
        },
      );

      scrollRef.current?.scrollTo({ animated: true, y: 0 });
      const { results } = await data.json();
      setPageSeries(currentPage);
      setSeries(results);
      Keyboard.dismiss();
    } catch (error) {
      console.error("Erro ao carregar filmes:", error);
      setSeries(series);
    }
  };

  const searchMovieAPI = async (currentPage: number = 1) => {
    try {
      const data = await fetch(
        `${API}search/movie?query=${searchMovie}&include_adult=false&language=pt-BR&page=${currentPage}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${KEY}`,
          },
        },
      );
      setPageMovies(currentPage);
      const { results } = await data.json();
      setMovies(results);
      Keyboard.dismiss();
    } catch (error) {
      console.error("Erro ao carregar filmes:", error);
      setMovies(movies);
    }
  };

  const loadMovies = async (currentPage: number = 1) => {
    try {
      const data = await fetch(
        `${API}movie/now_playing?language=pt-BR&page=${currentPage}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${KEY}`,
          },
        },
      );
      setPageMovies(currentPage);
      const { results } = await data.json();
      setMovies(results);
    } catch (error) {
      console.error("Erro ao carregar filmes:", error);
    }
  };
  const values = {
    loadMovies,
    setPageMovies,
    movies,
    pageMovies,
    searchMovieAPI,
    setSearchMovie,
    searchMovie,
    scrollRef,
    loadSeries,
    series,
    pageSeries,
    setSearchSeries,
    searchSeriesAPI,
    searchSeries,
  };
  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
}
