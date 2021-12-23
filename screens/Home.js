import { Raleway_400Regular, useFonts } from "@expo-google-fonts/raleway";
import AppLoading from "expo-app-loading";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/Home/BottomTabs";
import Categories from "../components/Home/Categories";
import HeaderTab from "../components/Home/HeaderTab";
import RestaurantItem, {
	localRestaurants,
} from "../components/Home/RestaurantItem";
import SearchBar from "../components/Home/SearchBar";

const YELP_API_KEY =
	"ZalVh1BRHhcK-_z4T5V9g8sLgFJenxA6y1_CdI9vBNMQ8JpVCPpqpluTvqBplwTSC4OdQNbXRjiHKyc392FCFkOlhxWRia4SaZWjCpEmKvJTtrG5TjWmvks7QhbEYXYx";

const Home = () => {
	const [restaurantsData, setRestaurantsData] = useState(localRestaurants);
	const [city, setCity] = useState("San Francisco");
	const [activeTab, setActiveTab] = useState("Delivery");

	const getRestaurantsFromYelp = () => {
		const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

		const apiOptions = {
			headers: {
				Authorization: `Bearer ${YELP_API_KEY}`,
			},
		};

		return fetch(yelpUrl, apiOptions)
			.then((res) => res.json())
			.then((json) =>
				setRestaurantsData(
					json.businesses.filter((business) =>
						business.transactions.includes(activeTab.toLowerCase())
					)
				)
			);
	};

	useEffect(() => {
		getRestaurantsFromYelp();
	}, [city, activeTab]);

	let [fontsLoaded] = useFonts({
		Raleway_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<SafeAreaView style={styles.main}>
			<View style={{ padding: 15 }}>
				<HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
				<SearchBar cityHandler={setCity} />
			</View>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{
					paddingHorizontal: 15,
				}}
			>
				<Categories />
				<RestaurantItem restaurantsData={restaurantsData} />
			</ScrollView>
			<Divider width={1} color="#ff7029" />
			<BottomTabs />
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
