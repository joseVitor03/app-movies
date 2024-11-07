import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: "2%",
  },
  card: {
    width: 140, // ou experimente "45%"
    marginHorizontal: 10, // espaço entre os cards
    marginBottom: "5%",
    borderColor: "#ffff",
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "#282828",
    justifyContent: "center",
  },
  containerText: {
    width: "100%",
    padding: "2%",
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
  },
});

export default styles;
