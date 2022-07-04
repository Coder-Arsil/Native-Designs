import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { ThemeContext } from './context/ThemeContext';
import { myColors } from './Styles/Colors';
// import AudioPlayer from './AudioPlayer/AudioPlayer';
// import ContactUs from './components/ContactUs';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <View style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: '#000' }]}>
        <Switch value={theme === 'light'}
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light ,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
