import { Raleway_800ExtraBold, useFonts } from "@expo-google-fonts/raleway";
import AppLoading from "expo-app-loading";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const items = [
	{
		image: require("../../assets/images/shopping-bag.png"),
		text: "Pick-Up",
	},
	{
		image: require("../../assets/images/soft-drink.png"),
		text: "Soft Drinks",
	},
	{
		image: require("../../assets/images/bread.png"),
		text: "Bakery Items",
	},
	{
		image: require("../../assets/images/fast-food.png"),
		text: "Fast Foods",
	},
	{
		image: require("../../assets/images/deals.png"),
		text: "Deals",
	},
	{
		image: require("../../assets/images/coffee.png"),
		text: "Coffee & Tea",
	},
	{
		image: require("../../assets/images/desserts.png"),
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
								fontSize: 13,
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
