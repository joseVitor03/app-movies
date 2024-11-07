import FavoriteList from "@/components/FavoriteList/FavoriteList";
import SelectTopList from "@/components/SelectTopList/SelectTopList";
import { MovieDetailsType, SerieDetailsType } from "@/types/DetailsType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
export default function Favorite() {
  const [activeFavorite, setActiveFavorite] = useState<"Movies" | "Series">(
    "Movies",
  );
  const [movies, setMovies] = useState<MovieDetailsType[]>([]);
  const [series, setSeries] = useState<SerieDetailsType[]>([]);

  useFocusEffect(
    useCallback(() => {
      const load = async () => {
        const dataMovies =
          (await AsyncStorage.getItem("favoriteMovies")) || "[]";
        const dataSeries =
          (await AsyncStorage.getItem("favoriteSeries")) || "[]";
        const resultMovies = JSON.parse(dataMovies);
        const resultSeries = JSON.parse(dataSeries);

        setMovies(resultMovies);
        setSeries(resultSeries);
        console.log("Carregado ao focar na aba");
      };

      load();
    }, []),
  );

  return (
    <View
      style={{ flex: 1, margin: 0, padding: 0, backgroundColor: "#424242" }}
    >
      <SelectTopList
        activeTop={activeFavorite}
        setActiveTop={setActiveFavorite}
      />
      <ScrollView>
        <FavoriteList
          movies={movies}
          series={series}
          activeFavorite={activeFavorite}
        />
      </ScrollView>
    </View>
  );
}
