import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: "10%",
    alignItems: "center",
  },
  text: {
    width: "90%",
    alignSelf: "flex-start",
    fontSize: 16,
    marginLeft: "5%",
    color: "#ffff",
  },
  input: {
    width: "90%",
    backgroundColor: "#e6e6e6",
    padding: "2%",
    margin: "2%",
    borderRadius: 8,
  },
  btn: {
    width: "90%",
    alignItems: "center",
    backgroundColor: "#395ddf",
    padding: "2%",
    borderRadius: 10,
    marginTop: "5%",
  },
  btnDisabled: {
    width: "90%",
    alignItems: "center",
    backgroundColor: "#9a9daa",
    padding: "2%",
    borderRadius: 10,
    marginTop: "5%",
  },
  textBtn: {
    fontSize: 18,
    color: "#ffff",
    fontWeight: "600",
  },
  message: {
    color: "red",
    fontStyle: "italic",
    fontWeight: "700",
    fontSize: 20,
    marginTop: "5%",
  },
});

export default styles;
