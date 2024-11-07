import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import { View } from "react-native";
import SearchBar from "@/components/SearchBar/SearchBar";
import SearchProvider from "@/context/SearchContext.";

export default function TabLayout() {
  return (
    <SearchProvider>
      <View style={{ flex: 1 }}>
        <Tabs
          screenOptions={{
            headerBackgroundContainerStyle: {
              width: "100%",
              alignItems: "center",
              backgroundColor: "#2a2a2a",
            },
            tabBarActiveTintColor: "#fff",
            tabBarActiveBackgroundColor: "#fff",
            tabBarInactiveBackgroundColor: "#9b9b9b",
            tabBarItemStyle: {
              backgroundColor: "#2a2a2a",
              padding: "1%",
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Filmes",
              header: ({ options: { title } }) => (
                <>
                  <SearchBar title={title} />
                </>
              ),
              tabBarIcon: ({ color }) => (
                <FontAwesome name="film" size={20} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="Series/SeriesHome"
            options={{
              title: "Séries",
              header: ({ options: { title } }) => <SearchBar title={title} />,
              tabBarIcon: ({ color }) => (
                <FontAwesome name="tv" size={20} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="Popular/Popular"
            options={{
              headerTitleStyle: {
                color: "#ffff",
              },
              title: "Top Avaliações",
              tabBarIcon: ({ color }) => (
                <Entypo name="star" size={24} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="Favorite/Favorite"
            options={{
              headerTitle: "Filmes e Séries favoritos",
              headerTitleStyle: {
                color: "#ffff",
              },
              title: "Favoritos",
              tabBarIcon: ({ color }) => (
                <Entypo name="heart" size={24} color={color} />
              ),
            }}
          />
        </Tabs>
      </View>
    </SearchProvider>
  );
}