import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Raleway_800ExtraBold } from "@expo-google-fonts/raleway";

const items = [
	{
		image: require("../assets/images/shopping-bag.png"),
		text: "Pick-Up",
	},
	{
		image: require("../assets/images/soft-drink.png"),
		text: "Soft Drinks",
	},
	{
		image: require("../assets/images/bread.png"),
		text: "Bakery Items",
	},
	{
		image: require("../assets/images/fast-food.png"),
		text: "Fast Foods",
	},
	{
		image: require("../assets/images/deals.png"),
		text: "Deals",
	},
	{
		image: require("../assets/images/coffee.png"),
		text: "Coffee & Tea",
	},
	{
		image: require("../assets/images/desserts.png"),
		text: "Desserts",
	},
];

export default function Categories() {
	let [fontsLoaded] = useFonts({
		ExtraBold: Raleway_800ExtraBold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<View
			style={{
				marginTop: 10,
				paddingVertical: 10,
			}}
		>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{/* loops start here */}
				{items.map((item, index) => (
					<View
						key={index}
						style={{
							alignItems: "center",
							marginHorizontal: 11,
						}}
					>
						<Image
							source={item.image}
							style={{
								width: 50,
								height: 40,
								resizeMode: "contain",
							}}
						/>
						<Text
							style={{
								fontFamily: "ExtraBold",
								fontSize: 14,
							}}
						>
							{item.text}
						</Text>
					</View>
				))}
				{/* loops end here */}
			</ScrollView>
		</View>
	);
}
