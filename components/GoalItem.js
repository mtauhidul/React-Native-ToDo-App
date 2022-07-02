import { Pressable, StyleSheet, Text, View } from 'react-native';

function GoalItem({ text, id, deleteItemHandler }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#2D1862' }}
        onPress={() => deleteItemHandler(id)}
        style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: '#543A97',
  },
  goalItemText: {
    padding: 12,
    color: '#D2CCE2',
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
