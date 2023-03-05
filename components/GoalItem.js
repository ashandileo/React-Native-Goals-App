import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GoalItem = ({ itemData, deleteGoalHandler }) => {
  return (
    <TouchableOpacity onPress={() => deleteGoalHandler(itemData.index)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#530acc",
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
