import {
  Keyboard,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import styles from "./styles";
import { useRef, useState } from "react";
import { useRouter } from "expo-router";
import login from "@/functions/login";

export default function FormLogin() {
  const inputRef = useRef<TextInput>(null);
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(false);

  const handleSubmit = () => {
    const { credentials } = login({
      email: form.email,
      password: form.password,
    });
    console.log(credentials);

    if (credentials === "success") {
      router.push("/(tabs)");
    } else {
      setMessage(true);
    }
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.text}>Email:</Text>
        <TextInput
          ref={inputRef}
          style={styles.input}
          onChangeText={(text) => setForm({ ...form, email: text })}
          placeholder="maria@gmail.com"
        />
        <Text style={styles.text}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Sua senha"
          onChangeText={(text) => setForm({ ...form, password: text })}
          secureTextEntry
        />
        <TouchableOpacity
          disabled={form.email.length < 1 || form.password.length < 1}
          onPress={handleSubmit}
          style={
            form.email.length < 1 || form.password.length < 1
              ? styles.btnDisabled
              : styles.btn
          }
        >
          <Text style={styles.textBtn}>Login</Text>
        </TouchableOpacity>
        {message && (
          <Text style={styles.message}>Email ou senha incorreta.</Text>
        )}
      </View>
    </Pressable>
  );
}
