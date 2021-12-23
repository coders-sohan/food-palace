import { Raleway_400Regular, useFonts } from "@expo-google-fonts/raleway";
import AppLoading from "expo-app-loading";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Categories from "../components/Categories";
import HeaderTab from "../components/HeaderTab";
import RestaurantItem, { localRestaurants } from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";

const YELP_API_KEY =
	"ZalVh1BRHhcK-_z4T5V9g8sLgFJenxA6y1_CdI9vBNMQ8JpVCPpqpluTvqBplwTSC4OdQNbXRjiHKyc392FCFkOlhxWRia4SaZWjCpEmKvJTtrG5TjWmvks7QhbEYXYx";

const Home = () => {
	const [restaurantsData, setRestaurantsData] = useState(localRestaurants);

	const getRestaurantsFromYelp = () => {
		const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=NewYork`;

		const apiOptions = {
			headers: {
				Authorization: `Bearer ${YELP_API_KEY}`,
			},
		};

		return fetch(yelpUrl, apiOptions)
			.then((res) => res.json())
			.then((data) => setRestaurantsData(data.businesses));
	};

	useEffect(() => {
		getRestaurantsFromYelp();
	}, []);

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
			<View
				style={{
					paddingHorizontal: 15,
				}}
			>
				<ScrollView
					showsVerticalScrollIndicator={false}
					style={{ marginBottom: 150 }}
				>
					<Categories />
					<RestaurantItem restaurantsData={restaurantsData} />
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
