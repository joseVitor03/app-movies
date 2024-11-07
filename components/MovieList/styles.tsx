import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  notFoundFilms: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundTitle: {
    color: "white",
  },
  container: {
    flex: 0,
    height: "100%",
    backgroundColor: "#424242",
  },
  listMovies: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "2%",
  },
  card: {
    backgroundColor: "#2a2a2a",
    width: "45%",
    height: 350,
    color: "#ffffff",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#fff",
    margin: "1%",
  },
  cardPoster: {
    borderRadius: 8,
    width: "100%",
    height: 250,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    color: "#ffff",
    margin: "2%",
  },
  note: {
    marginBottom: "2%",
    marginLeft: "4%",
    color: "#ffff",
  },
});

export default styles;
