import { SearchContext } from "@/context/SearchContext";
import { useContext, useEffect, useRef } from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

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
                <View style={styles.raiting}>
                  <AnimatedCircularProgress
                    size={50}
                    width={4}
                    fill={serie.vote_average * 10}
                    tintColor="#00e0ff"
                    backgroundColor="#2d455e"
                  >
                    {() => (
                      <View style={styles.insideRaiting}>
                        <Text style={{ fontSize: 18, color: "#ffffff" }}>
                          {Number(serie.vote_average * 10).toFixed(0)}
                        </Text>
                      </View>
                    )}
                  </AnimatedCircularProgress>
                </View>

                <Text style={styles.title}>{serie.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
          <View>
            <CountPage updatePage={updatePage} page={pageSeries} />
          </View>
        </ScrollView>
      ) : (
        <View>
          <MaterialCommunityIcons
            name="filmstrip-off"
            size={50}
            color="#ffff"
          />
          <Text>Nenhum Filme encontrado.</Text>
        </View>
      )}
    </View>
  );
}
