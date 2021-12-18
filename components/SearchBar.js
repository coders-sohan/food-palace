import React from "react";
import { Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import AppLoading from "expo-app-loading";
import { useFonts, Raleway_700Bold } from "@expo-google-fonts/raleway";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar() {
	let [fontsLoaded] = useFonts({
		Bold: Raleway_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}
	return (
		<View style={{ marginTop: 15, flexDirection: "row" }}>
			<GooglePlacesAutocomplete
				placeholder="Search"
				styles={{
					textInput: {
						backgroundColor: "#eeeeee",
						borderRadius: 30,
						fontFamily: "Bold",
						marginTop: 5,
						height: 30,
					},
					textInputContainer: {
						backgroundColor: "#eeeeee",
						borderRadius: 50,
						flexDirection: "row",
						alignItems: "center",
						marginRight: 10,
					},
				}}
				renderLeftButton={() => (
					<View style={{ marginLeft: 10 }}>
						<Ionicons name="location-sharp" size={24} />
					</View>
				)}
				renderRightButton={() => (
					<View
						style={{
							flexDirection: "row",
							marginRight: 8,
							backgroundColor: "#ffffff",
							paddingTop: 4,
							paddingBottom: 6,
							paddingLeft: 9,
							paddingRight: 9,
							borderRadius: 30,
							alignItems: "center",
						}}
					>
						<AntDesign
							name="clockcircle"
							size={12}
							style={{ marginRight: 6, marginTop: 2 }}
						/>
						<Text style={{ fontFamily: "Bold" }}>Search</Text>
					</View>
				)}
			/>
		</View>
	);
}
