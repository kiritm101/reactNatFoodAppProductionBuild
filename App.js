import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { useEffect, useState } from "react";
import useRestaurants from "./src/hooks/useRestaurants";
import Header from "./src/components/Header";
import SearchInput from "./src/components/SearchInput";
import Categories from "./src/components/Categories";
import Restaurants from "./src/components/Restaurants";

export default function App() {
  const [term, setTerm] = useState("Burger");
  const [commonCategories] = useState([
    {
      name: "Burger",
      img: require("./src/assets/images/burger.png"),
    },
    {
      name: "Pizza",
      img: require("./src/assets/images/pizza.png"),
    },
    {
      name: "Dessert",
      img: require("./src/assets/images/cake.png"),
    },
    {
      name: "Drinks",
      img: require("./src/assets/images/smoothies.png"),
    },
    {
      name: "Steak",
      img: require("./src/assets/images/steak.png"),
    },
    {
      name: "Pasta",
      img: require("./src/assets/images/pasta.png"),
    },
  ]);

  const [{ data, loading, error }, searchResaurants] = useRestaurants(term);

  useEffect(() => {
    searchResaurants(term);
  }, [term]);

  return (
    <View style={styles.container}>
      <Header upperText="Grab Meals" lowerText="Near You(Hybrid cross-platform app project By Kirit m)" />
      <SearchInput setTerm={setTerm} />
      <Categories
        commonCategories={commonCategories}
        setTerm={setTerm}
        term={term}
      />
      <Restaurants data={data} loading={loading} error={error} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(253,253,253)",
  },
  header1: {
    fontSize: 20,
    marginTop: 60,
    marginHorizontal: 25,
  },
  header2: {
    fontSize: 10,
    marginHorizontal: 25,
    fontWeight: "bold",
  },
});
