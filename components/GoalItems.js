import { FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './GoalItem';

function GoalItems({ goals, deleteItemHandler }) {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        renderItem={(itemData) => {
          return (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.key}
              deleteItemHandler={deleteItemHandler}
            />
          );
        }}
        alwaysBounceVertical={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 6,
    marginTop: 10,
  },
});

export default GoalItems;
