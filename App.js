import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItems from './components/GoalItems';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
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

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style={'light'} />
      <View style={styles.appContainer}>
        <Button
          title='Add new goal'
          color='#8970C7'
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          goalInputHandler={goalInputHandler}
          goalAddHandler={goalAddHandler}
          onCancel={endAddModalHandler}
        />

        <GoalItems goals={goals} deleteItemHandler={deleteItemHandler} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
