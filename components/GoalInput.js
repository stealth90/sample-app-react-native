import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = props => {
	const [enteredGoal, setEnteredGoal] = useState("");

	const handlerGoalInput = enteredText => {
		setEnteredGoal(enteredText);
	};

	const handlerAddGoal = () => {
		props.onAddGoal(enteredGoal);
		setEnteredGoal("");
	};
	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					onChangeText={handlerGoalInput}
					value={enteredGoal}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.buttons}>
						<Button title="ADD" onPress={handlerAddGoal} />
					</View>
					<View style={styles.buttons}>
						<Button title="CANCEL" color="red" onPress={props.onCancel} />
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	input: {
		width: "80%",
		borderColor: "black",
		borderWidth: 1,
		padding: 10
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		width: "60%"
	},
	buttons: {
		width: "40%"
	}
});

export default GoalInput;
