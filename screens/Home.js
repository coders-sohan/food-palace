import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import HeaderTab from "../components/HeaderTab";
import SearchBar from "../components/SearchBar";
import AppLoading from "expo-app-loading";
import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";
import Categories from "../components/Categories";

const Home = () => {
	let [fontsLoaded] = useFonts({
		Raleway_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<SafeAreaView style={styles.main}>
			<View style={{ padding: 15 }}>
				<HeaderTab />
				<SearchBar />
				<Categories />
			</View>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	main: {
		backgroundColor: "#e85d04",
		flex: 1,
		fontFamily: "Raleway_400Regular",
	},
});
