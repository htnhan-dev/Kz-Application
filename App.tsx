import {SafeAreaView, StyleSheet} from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';
import React from 'react';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
