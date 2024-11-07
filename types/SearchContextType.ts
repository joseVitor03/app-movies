import { MoviesType, SeriesType } from "./CardsType";
import { ScrollView } from "react-native";

export type SearchContextType = {
  loadMovies: (currentPage?: number) => Promise<void>;
  setPageMovies: React.Dispatch<React.SetStateAction<number>>;
  movies: MoviesType[];
  pageMovies: number;
  searchMovieAPI: (currentPage?: number) => Promise<void>;
  searchMovie: string;
  setSearchMovie: React.Dispatch<React.SetStateAction<string>>;
  scrollRef: React.RefObject<ScrollView>;
  loadSeries: (currentPage?: number) => Promise<void>;
  series: SeriesType[];
  pageSeries: number;
  setSearchSeries: React.Dispatch<React.SetStateAction<string>>;
  searchSeriesAPI: (currentPage?: number) => Promise<void>;
  searchSeries: string;
};
