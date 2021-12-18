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
			backgroundColor: props.btnColor,
			paddingTop: 4,
			paddingBottom: 6,
			paddingLeft: 16,
			paddingRight: 15,
			borderRadius: 30,
		}}
        
	>
		<Text
			style={{
				color: props.textColor,
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
		flexDirection: "row",
		alignSelf: "center",
	},
});
