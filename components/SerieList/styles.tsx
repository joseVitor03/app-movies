import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#424242",
    height: "100%",
  },
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "2%",
  },
  card: {
    width: "45%",
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
    margin: "2%",
  },
  cardPoster: {
    width: "100%",
    height: 250,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  raiting: {
    marginTop: "-12%",
    marginLeft: "4%",
    // backgroundColor: "#424242",
  },
  insideRaiting: {
    position: "absolute",
    width: 45, // Ligeiramente menor que o círculo
    height: 45, // Ligeiramente menor que o círculo
    borderRadius: 40, // Metade do tamanho para ficar circular
    backgroundColor: "#424242", // Cor dentro do círculo
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    color: "#ffff",
    margin: "2%",
    padding: "5%",
  },
});

export default styles;
