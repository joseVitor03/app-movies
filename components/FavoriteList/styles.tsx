import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
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
    margin: "2%",
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
  notFound: {
    height: 700,
    justifyContent: "center",
    alignItems: "center",
  },
  notFoundTitle: {
    color: "white",
  },
});

export default styles;
