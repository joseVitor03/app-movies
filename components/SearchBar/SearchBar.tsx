import { SearchContext } from "@/context/SearchContext";
import { useContext, useState, useRef } from "react";
import { Text, View, TextInput } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import styles from "./styles";

export default function SearchBar({ title }: { title: string | undefined }) {
  const inputRef = useRef<TextInput>(null);
  const {
    setSearchMovie,
    searchMovieAPI,
    loadMovies,
    searchSeriesAPI,
    setSearchSeries,
    loadSeries,
    scrollRef,
  } = useContext(SearchContext);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearchAPI = async () => {
    if (title === "Filmes") {
      await searchMovieAPI();
    } else {
      await searchSeriesAPI();
    }
    scrollRef.current?.scrollTo({ animated: true, y: 0 });
  };

  const handleLoad = async () => {
    if (title === "Filmes") {
      setIsFocused(false);
      setSearchMovie("");

      await loadMovies();
    } else {
      setIsFocused(false);
      setSearchSeries("");
      await loadSeries();
    }
  };

  const handleOpenKeyBoard = () => {
    console.log(isFocused);

    if (!isFocused) {
      setIsFocused(true);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 500);
    } else {
      setIsFocused(false);
      setSearchMovie("");
    }
  };

  return (
    <>
      <View style={styles.header}>
        <Text onPress={handleLoad} style={styles.title}>
          {title}
        </Text>
        <View style={styles.containerInput}>
          {isFocused && (
            <TextInput
              ref={inputRef}
              onSubmitEditing={handleSearchAPI}
              onChangeText={
                title === "Filmes"
                  ? (text) => setSearchMovie(text)
                  : (text) => setSearchSeries(text)
              }
              style={styles.inputSearch}
              placeholder="buscar...."
            />
          )}

          {!isFocused ? (
            <AntDesign
              onPress={handleOpenKeyBoard}
              name="search1"
              size={24}
              color="white"
            />
          ) : (
            <MaterialIcons
              name="cancel"
              onPress={handleOpenKeyBoard}
              size={24}
              color="white"
            />
          )}
        </View>
      </View>
    </>
  );
}
