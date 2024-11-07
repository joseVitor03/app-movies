import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#494949",
  },
  poster: {
    width: "80%",
    height: 500,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#ffff",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: "5%",
  },
  contaienrNoteAndHeart: {
    width: "90%",
    padding: "2%",
    marginVertical: "2%",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  note: {
    fontSize: 18,
    color: "#ffff",
  },
  scrollContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  containerGenres: {
    padding: "2%",
  },
  genre: {
    width: 120,
    marginHorizontal: 5,
    backgroundColor: "#005a8e",
    borderRadius: 50,
    fontWeight: "700",
    borderColor: "#0e0e0e",
    borderStyle: "solid",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  genreText: {
    padding: "2%",
    color: "#ffff",
    textAlign: "center",
  },
  date: {
    fontSize: 20,
    color: "#ffff",
    marginTop: "2%",
    marginLeft: "5%",
  },
  sinopse: {
    fontFamily: "serif",
    fontSize: 20,
    color: "#ffff",
    alignSelf: "flex-start",
    marginLeft: "5%",
    marginTop: "2%",
  },
  overview: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "left",
    marginTop: "2%",
    marginHorizontal: "5%",
    color: "#ffff",
    fontFamily: "serif",
  },
  title: {
    fontSize: 20,
    color: "#ffff",
    marginLeft: "5%",
    marginTop: "2%",
  },
});

export default styles;
