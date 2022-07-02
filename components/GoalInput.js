import { Button, StyleSheet, TextInput, View } from 'react-native';

function GoalInput({ goalInputHandler, goalAddHandler }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Add goal'
        onChangeText={goalInputHandler}
      />
      <Button title='Add goal' onPress={goalAddHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    padding: 8,
    borderRadius: 6,
  },
});

export default GoalInput;
