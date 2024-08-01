import { Text, View } from "react-native";
import { useTheme } from "styled-components/native";

export function Home() {
  const theme = useTheme();
  return (
    <View>
      <Text
        style={{
          fontFamily: theme["font-family"].bold,
        }}
      >
        Home
      </Text>
    </View>
  );
}
