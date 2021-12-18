import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import HeaderTab from "../components/HeaderTab";
import AppLoading from "expo-app-loading";
import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";

const Home = () => {
	let [fontsLoaded] = useFonts({
		Raleway_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<SafeAreaView style={styles.main}>
			<HeaderTab />
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	main: {
		marginTop: 35,
		fontFamily: "Raleway_400Regular",
	},
});
