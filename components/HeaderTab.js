import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Raleway_600SemiBold } from "@expo-google-fonts/raleway";

export default function HeaderTab() {
	const [activeTab, setActiveTab] = useState("Delivery");

	let [fontsLoaded] = useFonts({
		SemiBold: Raleway_600SemiBold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<View style={styles.headerTab}>
			<HeaderButton
				text="Delivery"
				btnColor="black"
				textColor="white"
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<HeaderButton
				text="Pickup"
				btnColor="white"
				textColor="black"
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
		</View>
	);
}

const HeaderButton = (props) => (
	<TouchableOpacity
		style={{
			backgroundColor: props.activeTab === props.text ? "black" : "#e85d04",
			paddingTop: 4,
			paddingBottom: 6,
			paddingLeft: 16,
			paddingRight: 15,
			borderRadius: 30,
		}}
		onPress={() => props.setActiveTab(props.text)}
	>
		<Text
			style={{
				// color: props.activeTab === props.text ? "#e85d04" : "black",
				color: "#fff",
				fontSize: 16,
				fontFamily: "SemiBold",
			}}
		>
			{props.text}
		</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	headerTab: {
		marginTop: 25,
		flexDirection: "row",
		alignSelf: "center",
		backgroundColor: "#e85d04",
		borderRadius: 30,
	},
});
