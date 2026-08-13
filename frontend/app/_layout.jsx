import { Stack } from "expo-router";
import { useEffect } from "react";
import { useAuthStore } from "../store/authStore";

export default function RootLayout() {
  const hydrate = useAuthStore((state) => state.hydrate);

  useEffect(() => {
    hydrate();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
