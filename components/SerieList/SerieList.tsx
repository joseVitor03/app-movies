import { SearchContext } from "@/context/SearchContext";
import { useContext, useEffect, useRef } from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import CountPage from "../CountPage/CountPage";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./styles";
import { useRouter } from "expo-router";

export default function SerieList() {
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);
  const { series, searchSeriesAPI, pageSeries, loadSeries, searchSeries } =
    useContext(SearchContext);

  const updatePage = async (newPage: number) => {
    if (searchSeries.length > 0) {
      await searchSeriesAPI(newPage);
    } else {
      await loadSeries(newPage);
    }
  };

  useEffect(() => {
    const load = async () => {
      await loadSeries();
    };
    load();
  }, []);

  useEffect(() => {
    const load = async () => {
      scrollRef.current?.scrollTo({ animated: true, y: 0 });
    };
    load();
  }, [series]);

  return (
    <View style={styles.container}>
      {series.length > 0 ? (
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          ref={scrollRef}
        >
          {series.map((serie) => (
            <TouchableOpacity
              key={serie.id}
              onPress={() =>
                router.push({
                  pathname: "/pages/PageDetails/PageDetails",
                  params: { serieId: serie.id },
                })
              }
              style={styles.card}
            >
              <View>
                <Image
                  style={styles.cardPoster}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${serie.poster_path}`,
                  }}
                />
                <Text style={styles.note}>
                  <Image
                    style={{ width: 25, height: 25 }}
                    source={require("@/assets/images/star.png")}
                  />
                  {Number(serie.vote_average).toFixed(1)}
                </Text>
                <Text style={styles.title}>{serie.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
          <View>
            <CountPage updatePage={updatePage} page={pageSeries} />
          </View>
        </ScrollView>
      ) : (
        <View style={styles.notSeries}>
          <MaterialCommunityIcons
            name="filmstrip-off"
            size={50}
            color="#ffff"
          />
          <Text style={styles.title}>Nenhum Filme encontrado.</Text>
        </View>
      )}
    </View>
  );
}
