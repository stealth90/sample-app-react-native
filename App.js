import React, { useState } from "react";
import { StyleSheet, Button, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const handlerAddGoal = goalTitle => {
		setCourseGoals(currentGoals => [
			...currentGoals,
			{ id: Math.random().toString(), value: goalTitle }
		]);
		setIsAddMode(false);
	};

	const handlerCancelGoalAdd = () => {
		setIsAddMode(false);
	};

	const handlerDeleteGoal = goalId => {
		setCourseGoals(currentGoals => {
			return currentGoals.filter(goal => goal.id !== goalId);
		});
	};

	return (
		<View style={styles.screen}>
			<Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
			<GoalInput
				onCancel={handlerCancelGoalAdd}
				visible={isAddMode}
				onAddGoal={handlerAddGoal}
			/>
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={courseGoals}
				renderItem={itemData => (
					<GoalItem
						id={itemData.item.id}
						onDelete={handlerDeleteGoal}
						title={itemData.item.value}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50
	}
});
