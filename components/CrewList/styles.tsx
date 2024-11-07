import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: "2%",
  },
  card: {
    width: 140, // ou experimente "45%"
    height: 260,
    marginHorizontal: 10, // espaço entre os cards
    marginBottom: "5%",
    borderColor: "#ffff",
    borderWidth: 2,
    borderRadius: 8,
  },
  cardImage: {
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  containerTexts: {
    width: "100%",
    marginTop: "5%",
  },
  name: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
  },
  job: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
    marginTop: "5%",
  },
});

export default styles;
