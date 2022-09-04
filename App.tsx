/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { PropsWithChildren } from 'react';
import {
	Button,
	FlatList,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleProp,
	StyleSheet,
	Text,
	TextInput,
	useColorScheme,
	View,
	ViewStyle
} from 'react-native';
import { toDo } from './models/toDo';

import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';

const toDos: toDo[] = [
	{
		id: 1,
		activity: 'Apply js basics'
	},
	{
		id: 2,
		activity: 'Apply js arrow functions'
	},
	{
		id: 3,
		activity: 'Start implementing some js with mobile apps'
	}
];

const App = () => {
	const Item = ({ item }: any) => (
		<View key={item.id}>
			<Text>{`${item.id}: ${item.activity}`}</Text>
		</View>
	);

	const isDarkMode = useColorScheme() === 'dark';

	return (
		<SafeAreaView style={styles.safeArea}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<View style={styles.mainContainer}>
				<Text style={styles.secondTitles}>Add ToDo to your list</Text>
				<View style={styles.todoHeader}>
					<TextInput placeholder="Enter ToDo" style={styles.todoInput} />
					<Button title="Add ToDo" />
				</View>

				<View style={styles.todoBody}>
					<ScrollView contentInsetAdjustmentBehavior="automatic">
						<FlatList data={toDos} renderItem={Item} />
					</ScrollView>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1
	},
	mainContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flex: 1
	},
	todoHeader: {
		width: '100%',
		height: 40,
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	todoBody: {
		height: '100%',
		backgroundColor: '#adb'
	},
	todoInput: {
		borderBottomColor: '#fff',
		borderStyle: 'solid'
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600'
	},
	secondTitles: {
		textAlign: 'center',
		fontSize: 24,
		fontWeight: '800'
	}
});

export default App;
