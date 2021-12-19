import { Raleway_400Regular, useFonts } from "@expo-google-fonts/raleway";
import AppLoading from "expo-app-loading";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Categories from "../components/Categories";
import HeaderTab from "../components/HeaderTab";
import RestaurantItem from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";

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
			</View>
			<View style={{ padding: 15 }}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					// style={{ marginBottom: 50 }}
				>
					<Categories />
					<RestaurantItem />
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	main: {
		backgroundColor: "#f9844a",
		flex: 1,
		fontFamily: "Raleway_400Regular",
	},
});
