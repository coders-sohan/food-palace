import {
	Raleway_400Regular,
	Raleway_700Bold,
	useFonts,
} from "@expo-google-fonts/raleway";
import AppLoading from "expo-app-loading";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
	{
		name: "Beachside Bar",
		image_url:
			"https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
		categories: ["Cafe", "Bar"],
		price: "$$",
		reviews: 1244,
		rating: 4.5,
	},
	{
		name: "Benihana",
		image_url:
			"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
		categories: ["Cafe", "Bar"],
		price: "$$",
		reviews: 1244,
		rating: 3.7,
	},
	{
		name: "India's Grill",
		image_url:
			"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
		categories: ["Indian", "Bar"],
		price: "$$",
		reviews: 700,
		rating: 4.9,
	},
];

export default function RestaurantItem(props) {
	let [fontsLoaded] = useFonts({
		Regular: Raleway_400Regular,
		Bold: Raleway_700Bold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<>
			{props.restaurantsData.map((restaurant, index) => (
				<TouchableOpacity
					key={index}
					activeOpacity={0.9}
					style={{
						marginBottom: 15,
					}}
				>
					<View
						key={index}
						style={{
							padding: 11,
							backgroundColor: "#ffffff",
							borderRadius: 5,
							marginTop: 10,
						}}
					>
						<RestaurantImage image={restaurant.image_url} />
						<RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
					</View>
				</TouchableOpacity>
			))}
		</>
	);
}

const RestaurantImage = (props) => (
	<>
		<Image
			source={{
				uri: props.image,
			}}
			style={{
				width: "100%",
				height: 180,
			}}
		/>
		<TouchableOpacity
			style={{
				position: "absolute",
				right: 20,
				top: 20,
			}}
		>
			<MaterialCommunityIcons name="heart-outline" size={25} color="#ffffff" />
		</TouchableOpacity>
	</>
);

const RestaurantInfo = (props) => (
	<View
		style={{
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginTop: 10,
		}}
	>
		<View>
			<Text
				style={{
					fontFamily: "Bold",
					fontSize: 16,
					textTransform: "capitalize",
				}}
			>
				{props.name}
			</Text>
			<Text
				style={{
					fontFamily: "Regular",
					fontSize: 14,
					color: "#787878",
				}}
			>
				30-40 • min
			</Text>
		</View>
		<View
			style={{
				backgroundColor: "#363636",
				height: 26,
				width: 60,
				paddingHorizontal: 10,
				// paddingVertical: 5,
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				borderRadius: 5,
			}}
		>
			<MaterialCommunityIcons
				name="star"
				size={14}
				style={{ marginTop: 3.5 }}
				color="#ffffff"
			/>
			<Text
				style={{
					fontFamily: "Bold",
					fontSize: 14,
					color: "#ffffff",
					lineHeight: 13,
				}}
			>
				{props.rating}
			</Text>
		</View>
	</View>
);
