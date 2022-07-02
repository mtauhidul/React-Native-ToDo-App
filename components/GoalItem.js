import { Pressable, StyleSheet, Text, View } from 'react-native';

function GoalItem({ text, id, deleteItemHandler }) {
  return (
    <Pressable onPress={() => deleteItemHandler(id)}>
      <View key={id} style={styles.goalItem}>
        <Text style={styles.goalItemText}>● {text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    padding: 12,
    marginBottom: 10,
    borderRadius: 6,
    backgroundColor: '#F2EFEF',
  },
  goalItemText: {
    fontWeight: '600',
    fontSize: 16,
  },
});

export default GoalItem;
