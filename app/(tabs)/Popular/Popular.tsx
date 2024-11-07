import SelectTopList from "@/components/SelectTopList/SelectTopList";
import TopRated from "@/components/TopRated/TopRated";
import { MoviesType, SeriesType } from "@/types/CardsType";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import topRatedMovies from "@/functions/topRatedMovies";
import topRatedSeries from "@/functions/topRatedSeries";

export default function Popular() {
  const [activeTop, setActiveTop] = useState<"Movies" | "Series">("Movies");
  const [countPageMovie, setCountPageMovie] = useState(1);
  const [countPageSerie, setCountPageSerie] = useState(1);
  const [movieList, setMovieList] = useState<MoviesType[]>([]);
  const [serieList, setSerieList] = useState<SeriesType[]>([]);

  useEffect(() => {
    const load = async () => {
      if (activeTop === "Movies") {
        const result = await topRatedMovies(countPageMovie);
        setMovieList(result);
      } else {
        const result = await topRatedSeries(countPageSerie);
        setSerieList(result);
      }
    };
    load();
  }, [activeTop]);

  return (
    <View
      style={{ flex: 1, margin: 0, padding: 0, backgroundColor: "#424242" }}
    >
      <SelectTopList setActiveTop={setActiveTop} activeTop={activeTop} />
      {movieList && (
        <TopRated
          setMovieList={setMovieList}
          setSerieList={setSerieList}
          countPageMovie={countPageMovie}
          countPageSerie={countPageSerie}
          setCountPageMovie={setCountPageMovie}
          setCountPageSerie={setCountPageSerie}
          activeTop={activeTop}
          movies={movieList}
          series={serieList}
        />
      )}
    </View>
  );
}
