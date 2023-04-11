import React from "react";
import {View, Text, StyleSheet} from "react-native";

const AppTitle = () => {
    return(
        <View>
            <Text style={styles.title}>PATIKASTORE</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        color: "purple",
        fontWeight: "bold",
        fontSize: 30,
        marginLeft: 10,
        marginRight: 10,
        marginTop:10
    }
});

export default AppTitle;