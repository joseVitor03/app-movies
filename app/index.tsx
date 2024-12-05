import FormLogin from "@/components/FormLogin/FormLogin";
import { Image, View } from "react-native";

export default function Login() {
  return (
    <View style={{ height: "100%", backgroundColor: "#424242" }}>
      <Image
        style={{
          height: 200,
          width: 200,
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "10%",
        }}
        accessibilityLabel="Logo da aplicação"
        source={require("@/assets/images/adaptive-icon.png")}
      />
      <FormLogin />
    </View>
  );
}
