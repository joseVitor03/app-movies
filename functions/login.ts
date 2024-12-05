const EMAIL = process.env.EXPO_PUBLIC_VALID_EMAIL;
const PASSWORD = process.env.EXPO_PUBLIC_VALID_PASSWORD;

export default function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  if (email === EMAIL && password === PASSWORD) {
    return { credentials: "success" };
  }
  return { credentials: "denied" };
}
