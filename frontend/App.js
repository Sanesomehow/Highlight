import React, { useEffect } from 'react';
import { View, Text } from 'react-native';


const App = () => {
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <View>
      <Text>Testing Communication</Text>
    </View>
  );
};

export default App;
