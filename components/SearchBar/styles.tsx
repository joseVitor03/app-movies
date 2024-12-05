import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const screen = Dimensions.get("window").width;

const styles = StyleSheet.create({
  header: {
    width: screen,
    flexDirection: "row",
    padding: "5%",
    backgroundColor: "#2a2a2a",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    marginTop: "5%",
    fontSize: 20,
    color: "#fff",
  },
  containerInput: {
    width: "70%",
    flexDirection: "row",
    marginTop: "5%",
    marginLeft: "2%",
    padding: "1%",
    borderRadius: 8,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  inputSearch: {
    width: "90%",
    padding: "2%",
    marginTop: "2%",
    marginRight: "5%",
    backgroundColor: "#dbdbdb",
    borderRadius: 8,
    textAlign: "left",
  },
});

export default styles;
