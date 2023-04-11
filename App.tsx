import React from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";
import ProductCard from "./src/Components/ProductCard/ProductCard";
import productData from "./assets/data/product_list.json";
import SearchBar from "./src/Components/SearchBar";
import AppTitle from "./src/Components/AppTitle/AppTitle";

const App = () => {

  const renderProduct = ({item} : any) => <ProductCard product={item}/>;


  return(
    <SafeAreaView style={styles.container}>
      <AppTitle />
      <SearchBar />
        <FlatList 
        keyExtractor={(item, index)=> item.id.toString()}
        data={productData}
        renderItem={renderProduct}
        numColumns={2}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "white"
  }
});

export default App;