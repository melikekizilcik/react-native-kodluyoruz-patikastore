import React from "react";
import {View, Text, StyleSheet} from "react-native";

const SearchBar = () => {
    return(
        <View>
            <Text style={styles.container}>Ara...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 10,
        padding:10,
        borderRadius: 8,
        backgroundColor: "#e0e0e0"
    }
});

export default SearchBar;