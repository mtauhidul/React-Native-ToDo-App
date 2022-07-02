import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItems from './components/GoalItems';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function goalAddHandler() {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  function deleteItemHandler(id) {
    setGoals((currentGoals) =>
      currentGoals.filter((goals) => goals.key !== id)
    );
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        goalInputHandler={goalInputHandler}
        goalAddHandler={goalAddHandler}
      />

      <GoalItems goals={goals} deleteItemHandler={deleteItemHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
