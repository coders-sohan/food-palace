import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Raleway_700Bold, useFonts } from "@expo-google-fonts/raleway";
import AppLoading from "expo-app-loading";

export default function BottomTabs() {
	let [fontsLoaded] = useFonts({
		Bold: Raleway_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<View
			style={{
				flexDirection: "row",
				margin: 10,
				marginHorizontal: 16,
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<Icon icon="home" text="Home" />
			<Icon icon="search" text="Search" />
			<Icon icon="shopping-bag" text="Grocery" />
			<Icon icon="receipt" text="Orders" />
			<Icon icon="user" text="Account" />
		</View>
	);
}

const Icon = (props) => (
	<TouchableOpacity>
		<View>
			<FontAwesome5
				name={props.icon}
				size={20}
				style={{
					color: "#ffff",
					marginBottom: 3,
					alignSelf: "center",
				}}
			/>
			<Text
				style={{
					fontFamily: "Bold",
					color: "#ffff",
				}}
			>
				{props.text}
			</Text>
		</View>
	</TouchableOpacity>
);
