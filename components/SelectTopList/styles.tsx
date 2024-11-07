import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerTop: {
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: "2%",
  },
  btnSelect: {
    width: 100,
    textAlign: "center",
    backgroundColor: "#000000",
    marginVertical: "2%",
    padding: "2%",
    borderRadius: 10,
    color: "#ffff",
  },
  btnSelectActive: {
    width: 100,
    textAlign: "center",
    backgroundColor: "#ececec",
    marginVertical: "2%",
    padding: "2%",
    borderRadius: 10,
    color: "#232323",
  },
});

export default styles;
